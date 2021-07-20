import React, { Component } from "react";

import { Container } from "./styles";

type Props = {
  className?: string;
};

class Button extends Component<Props> {
  render() {
    const { className, children } = this.props;
    return <Container className={className}>{children}</Container>;
  }
}

export default Button;
