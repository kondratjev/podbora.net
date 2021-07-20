import React, { Component } from "react";

import Layout, { BackgroundEnum } from "src/components/Layout";
import Container from "src/components/Container";
import TextInput from "src/components/TextInput";
import Link from "next/link";

import marks from "src/__mockup__/marks.json";

import {
  Form,
  FormHeader,
  FormStep,
  FormTitle,
  FormContent,
  FormLabel,
  Marks,
  Mark,
  MarkIcon,
  MarkName
} from "./styles";

class Request extends Component {
  render() {
    return (
      <Layout background={BackgroundEnum.Gray}>
        <Container>
          <Form>
            <FormHeader>
              <FormStep>1</FormStep>
              <FormTitle>Создать заявку</FormTitle>
            </FormHeader>
            <FormContent>
              <FormLabel>Укажите точное место отправления и прибытия</FormLabel>
              <TextInput placeholder="Марка авто" />
              <Marks>
                {marks.map(mark => (
                  <Mark key={mark.id}>
                    <MarkIcon
                      style={{ backgroundImage: `url(${mark.image})` }}
                    />
                    <MarkName>{mark.name}</MarkName>
                  </Mark>
                ))}
              </Marks>
            </FormContent>
          </Form>
        </Container>
      </Layout>
    );
  }
}

export default Request;
