import React, { Component } from "react";
import Link from "next/link";

import Container from "src/components/Container";

import CarIcon from "src/assets/images/car.svg";

import {
  Wrapper,
  Content,
  Image,
  Title,
  TitleLink,
  Form,
  FormTitle,
  FormDescription,
  FormInput,
  FormSubmit,
  CarWrapper,
  Car
} from "./styles";

class Main extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Content>
            <Title>
              Подбор автомобиля <br /> лучшими{" "}
              <Link href="/search">
                <TitleLink>Автоподборщиками</TitleLink>
              </Link>
            </Title>
            <Form>
              <FormTitle>Создать заявку</FormTitle>
              <FormDescription>
                Если вы не зарегистрированы, процесс регистрации начнется
                автоматически
              </FormDescription>
              <FormInput placeholder="Ваша почта" />
              <FormSubmit>Поехали</FormSubmit>
            </Form>
          </Content>
          <Image>
            <CarWrapper>
              <Car style={{ backgroundImage: `url(${CarIcon})` }} />
            </CarWrapper>
          </Image>
        </Wrapper>
      </Container>
    );
  }
}

export default Main;
