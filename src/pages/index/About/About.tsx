import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import Container from "src/components/Container";
import Section from "src/components/Section";
import SectionTitle from "src/components/SectionTitle";

import {
  Switcher,
  SwitcherItem,
  Items,
  Item,
  ItemTitle,
  ItemDescription,
} from "./styles";

enum Type {
  Driver = "driver",
  Picker = "picker"
}

type Props = {};

@observer
class About extends Component<Props> {
  @observable type: Type = Type.Driver;

  onChange = (type: Type) => () => {
    this.type = type;
  };

  render() {
    return (
      <Section>
        <Container>
          <SectionTitle>Как это работает</SectionTitle>
          <Switcher>
            <SwitcherItem
              onClick={this.onChange(Type.Driver)}
              isActive={this.type === Type.Driver}
            >
              Водителю
            </SwitcherItem>
            <SwitcherItem
              onClick={this.onChange(Type.Picker)}
              isActive={this.type === Type.Picker}
            >
              Подборщику
            </SwitcherItem>
          </Switcher>
          {this.type === Type.Driver && (
            <Items>
              <AboutItem
                title="1. Создаете заявку"
                description="с кратким описанием автомобиля: марка, модель, год автомобиля и т.д."
              />
              <AboutItem
                title="2. Получаете предложения"
                description="от специализированных автоподборщиков на почту или в личном
                кабинете."
              />
              <AboutItem
                title="3. Сравниваете"
                description="наиболее подходящие предложения по стоимости, отзывам,
                местоположению и т.д."
              />
              <AboutItem
                title="4. Подтверждаете"
                description="и ждете пока вам найдут автомобиль"
              />
            </Items>
          )}
          {this.type === Type.Picker && (
            <Items>
              <AboutItem
                title="1. Регистрируетесь"
                description="как автоподборщик"
              />
              <AboutItem
                title="2. Добавляете услуги"
                description="от специализированных автоподборщиков на почту или в личном
                кабинете"
              />
              <AboutItem
                title="3. Получаете заявки"
                description="от клиентов на почту или в личном кабинете"
              />
              <AboutItem
                title="4. Откликаетесь"
                description="и предлагаете самое выгодное условия для работы"
              />
            </Items>
          )}
        </Container>
      </Section>
    );
  }
}

export default About;

type AboutItemProps = {
  title: string;
  description: string;
};

class AboutItem extends Component<AboutItemProps> {
  render() {
    const { title, description } = this.props;
    return (
      <Item>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </Item>
    );
  }
}
