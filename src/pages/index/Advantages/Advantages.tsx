import React, { Component } from "react";

import Container from "src/components/Container";
import Section from "src/components/Section";
import SectionTitle from "src/components/SectionTitle";

import HandshakeIcon from "src/assets/images/agreement.svg";

import {
  Items,
  Item,
  ItemIcon,
  ItemContent,
  ItemTitle,
  ItemDescription
} from "./styles";

class Advantages extends Component {
  render() {
    return (
      <Section>
        <Container>
          <SectionTitle>Наши преимущества</SectionTitle>
          <Items>
            <AdvantagesItem
              icon={HandshakeIcon}
              title="Комфорт"
              description="Выбирайте марку и модель машины"
            />
            <AdvantagesItem
              icon={HandshakeIcon}
              title="Комфорт"
              description="Выбирайте марку и модель машины"
            />
            <AdvantagesItem
              icon={HandshakeIcon}
              title="Комфорт"
              description="Выбирайте марку и модель машины"
            />
          </Items>
        </Container>
      </Section>
    );
  }
}

export default Advantages;

type AdvantagesItemProps = {
  icon: string;
  title: string;
  description: string;
};

class AdvantagesItem extends Component<AdvantagesItemProps> {
  render() {
    const { title, description, icon } = this.props;
    return (
      <Item>
        <ItemIcon style={{ backgroundImage: `url(${icon})` }} />
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{description}</ItemDescription>
        </ItemContent>
      </Item>
    );
  }
}
