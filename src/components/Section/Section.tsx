import React, { Component } from "react";

import { Container } from "./styles";

class Section extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default Section;
