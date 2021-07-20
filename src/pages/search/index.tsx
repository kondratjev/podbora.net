import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import Layout, { BackgroundEnum } from "src/components/Layout";
import Container from "src/components/Container";

import services from "src/__mockup__/services.json";

import {
  SearchContainer,
  SearchInput,
  SearchButton,
  Grid,
  Services,
  Service,
  ServiceRight,
  ServiceHeader,
  ServiceAvatar,
  ServiceContent,
  ServiceName,
  ServiceReview,
  ServiceStar,
  ServiceStarOutlined,
  ServiceReviewCount,
  ServiceAddress,
  ServicePrice,
  ServiceType,
  Filter,
  FilterItem,
  FilterItemTitle,
  FilterItemVariants,
  FilterItemVariant
} from "./styles";

@observer
class Search extends Component {
  @observable search: string = "";

  onSearchChange = (search: string) => {
    this.search = search;
  };

  render() {
    return (
      <Layout background={BackgroundEnum.Gray}>
        <Container>
          <SearchContainer>
            <SearchInput
              value={this.search}
              onChange={this.onSearchChange}
              placeholder="Поиск"
            />
            <SearchButton>Поиск</SearchButton>
          </SearchContainer>
          <Grid>
            <Services>
              {services
                .filter(service =>
                  service.name.toLowerCase().includes(this.search.toLowerCase())
                )
                .map(service => (
                  <Service key={service.id}>
                    <ServiceHeader>
                      <ServiceAvatar />
                      <ServiceContent>
                        <ServiceName>{service.name}</ServiceName>
                        <ServiceReview>
                          {new Array(5).fill(null).map((_, index) => {
                            const count = Math.floor(service.rating / 2);
                            return index < count ? (
                              <ServiceStar />
                            ) : (
                              <ServiceStarOutlined />
                            );
                          })}
                          <ServiceReviewCount>
                            {service.review_count}
                          </ServiceReviewCount>
                        </ServiceReview>
                      </ServiceContent>
                      <ServiceRight>
                        <ServicePrice>600₽ - 10 000₽</ServicePrice>
                        <ServiceType>Частный</ServiceType>
                      </ServiceRight>
                    </ServiceHeader>
                    {service.address && (
                      <ServiceAddress>{service.address}</ServiceAddress>
                    )}
                  </Service>
                ))}
            </Services>
            <Filter>
              <FilterItem>
                <FilterItemTitle>Тип сервиса</FilterItemTitle>
                <FilterItemVariants>
                  <FilterItemVariant>Компания</FilterItemVariant>
                  <FilterItemVariant>Частный</FilterItemVariant>
                </FilterItemVariants>
              </FilterItem>
              <FilterItem>
                <FilterItemTitle>Тип сервиса</FilterItemTitle>
                <FilterItemVariants>
                  <FilterItemVariant>Компания</FilterItemVariant>
                  <FilterItemVariant>Частный</FilterItemVariant>
                </FilterItemVariants>
              </FilterItem>
            </Filter>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default Search;
