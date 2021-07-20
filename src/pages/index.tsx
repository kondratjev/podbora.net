import React, { Component } from "react";

import Layout, { BackgroundEnum } from "src/components/Layout";
import Main from "./index/Main";
import About from "./index/About";
import Advantages from "./index/Advantages";
import Reviews from "./index/Reviews";

class Index extends Component {
  render() {
    return (
      <Layout>
        <Main />
        <About />
        <Advantages />
        <Reviews />
      </Layout>
    );
  }
}

export default Index;
