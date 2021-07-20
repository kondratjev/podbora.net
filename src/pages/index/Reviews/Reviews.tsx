import React, { Component } from "react";

import Container from "src/components/Container";
import Section from "src/components/Section";
import SectionTitle from "src/components/SectionTitle";

import {
  Items,
  Item,
  ItemHeader,
  ItemUser,
  ItemUserAvatar,
  ItemUserContent,
  ItemUserInfo,
  ItemUserName,
  ItemUserDate,
  ItemUserReview,
  ItemService,
  ItemServiceContent,
  ItemServiceInfo,
  ItemServiceDate,
  ItemServiceName,
  ItemServiceReview,
  ItemStar,
  ItemText,
  MoreButton
} from "./styles";

class Reviews extends Component {
  render() {
    return (
      <Section>
        <Container>
          <SectionTitle>Отзывы клиентов об автоподборщиках</SectionTitle>
          <Items>
            <Item>
              <ItemHeader>
                <ItemUser>
                  <ItemUserAvatar />
                  <ItemUserContent>
                    <ItemUserInfo>
                      <ItemUserName>Сергей</ItemUserName>
                      <ItemUserDate>08 июля 2020</ItemUserDate>
                    </ItemUserInfo>
                    <ItemUserReview>
                      <ItemStar />
                      <ItemStar />
                      <ItemStar />
                      <ItemStar />
                      <ItemStar />
                    </ItemUserReview>
                  </ItemUserContent>
                </ItemUser>
                <ItemService>
                  <ItemServiceContent>
                    <ItemServiceName>ДиагностМастер</ItemServiceName>
                    <ItemServiceReview>
                      <ItemStar />
                      <ItemStar />
                      <ItemStar />
                      <ItemStar />
                      <ItemStar />
                    </ItemServiceReview>
                  </ItemServiceContent>
                  <ItemUserAvatar />
                </ItemService>
              </ItemHeader>
              <ItemText>
                Отличный сервис, вежливый персонал. Все сделали, цена не
                возросла, как это бывает в других сервисах. Бесплатно провели
                диагностику подвески и компьютерную диагностику двигателя. Нашли
                другую поломку, дали рекомендации по ремонту. В общем сервис
                "Что надо", чувствуется клиентоориентированность. Рекомендую, не
                пожалеете.
              </ItemText>
            </Item>
          </Items>
          <MoreButton>Посмотреть все отзывы</MoreButton>
        </Container>
      </Section>
    );
  }
}

export default Reviews;
