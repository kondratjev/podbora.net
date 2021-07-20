import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import { Container, Placeholder, Input, ClearIcon } from "./styles";

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
};

@observer
class TextInput extends Component<Props> {
  @observable isFocused: boolean = false;

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.currentTarget.value);
  };

  onFocus = () => {
    this.isFocused = true;
  };

  onBlur = () => {
    this.isFocused = false;
  };

  onClear = () => {
    this.props.onChange("");
    this.isFocused = false;
  };

  render() {
    const { value, className, placeholder } = this.props;
    return (
      <Container className={className}>
        <Input
          value={value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <Placeholder isFocused={!!value || this.isFocused}>
          {placeholder}
        </Placeholder>
        <ClearIcon isVisible={!!value} onClick={this.onClear}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3002 0.709971C12.9102 0.319971 12.2802 0.319971 11.8902 0.709971L7.00022 5.58997L2.11022 0.699971C1.72022 0.309971 1.09021 0.309971 0.700215 0.699971C0.310215 1.08997 0.310215 1.71997 0.700215 2.10997L5.59022 6.99997L0.700215 11.89C0.310215 12.28 0.310215 12.91 0.700215 13.3C1.09021 13.69 1.72022 13.69 2.11022 13.3L7.00022 8.40997L11.8902 13.3C12.2802 13.69 12.9102 13.69 13.3002 13.3C13.6902 12.91 13.6902 12.28 13.3002 11.89L8.41021 6.99997L13.3002 2.10997C13.6802 1.72997 13.6802 1.08997 13.3002 0.709971Z"
              fill="#83B0E3"
            />
          </svg>
        </ClearIcon>
      </Container>
    );
  }
}

export default TextInput;
