import React, { Component } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "./index.css";

import Header from "./Header";
import Footer from "./Footer";

import { Container, Content } from "./styles";

export enum BackgroundEnum {
  White = "#fff",
  Gray = "#f3f6fd"
}

type LayoutProps = {
  title?: string;
  background?: BackgroundEnum;
};

class Layout extends Component<LayoutProps> {
  render() {
    const {
      title = "ПОДБОРА.НЕТ - Подбор автомобиля лучшими автоподборщиками",
      background = BackgroundEnum.White,
      children
    } = this.props;

    return (
      <Container background={background}>
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Container>
    );
  }
}

export default Layout;
