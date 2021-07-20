import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import services from "src/__mockup__/services.json";
import cities from "src/__mockup__/cities.json";

import {
  MapContainer,
} from "./styles";

@observer
export default class MyMap extends Component {
  @observable zoom: number = 12;
  @observable center = {
    lat: 53.508816,
    lng: 49.419207
  };

  componentDidMount() {
    const city = cities.find(city => city.name === "Самара")!;
    this.center = {
      lat: city.lat,
      lng: city.long
    };
  }

  handleClick = (service: any) => () => {
    this.zoom = 15;
    this.center = {
      lat: service.lat,
      lng: service.long
    };
  };

  render() {
    return (
      <>
        <MapContainer>
          <Map
            center={this.center}
            zoom={this.zoom}
            zoomControl={false}
            minZoom={3}
            animate
          >
            <TileLayer
              attribution='&amp;copy Участники <a href="http://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
              {services.map(service => (
                <Marker position={[service.lat, service.long]}>
                  <Popup minWidth={90}>
                    {service.name} <br /> {service.description}
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </Map>
        </MapContainer>
        
      </>
    );
  }
}
