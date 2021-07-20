import styled from "styled-components";

import DefaultButton from "src/components/Button";

export const Wrapper = styled.div`
  margin-top: 92px;
  display: flex;
  align-items: center;
  margin-bottom: 92px;
`;

export const Content = styled.div`
  flex-basis: 60%;
  max-width: 60%;
`;

export const Image = styled.div`
  flex-basis: 40%;
  max-width: 40%;
`;

export const Title = styled.h1``;

export const TitleLink = styled.span`
  cursor: pointer;
  color: #0762c8;
  position: relative;
  transition: 0.3s;

  &:after {
    content: "";
    background-color: #0762c8;
    height: 2px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -2px;
    z-index: 1;
    transition: 0.3s;
  }

  &:hover {
    color: #064ea0;

    &:after {
      bottom: -6px;
      background-color: #064ea0;
    }
  }
`;

export const Form = styled.div`
  margin-top: 86px;
  position: relative;
  width: 500px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 12px 32px rgba(168, 172, 185, 0.5);
  padding: 40px 48px 48px 48px;
`;

export const FormTitle = styled.h3``;

export const FormDescription = styled.p`
  font-weight: 400;
  color: #3b5172;
  line-height: 24px;
  width: 320px;
  margin-top: 28px;
`;

export const FormInput = styled.input`
  font-weight: 400;
  color: #3b5172;
  line-height: 24px;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 48px;
  padding: 12px 22px 10px 22px;
  background: 0 0;
  border: 1px solid #83b0e3;
  border-radius: 30px;
  position: relative;

  margin: 24px 0;

  &:focus {
    outline: none;
  }
`;

export const FormSubmit = styled(DefaultButton)`
  width: 100%;
`;

export const CarWrapper = styled.div`
  position: relative;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  animation: zoom 1.25s cubic-bezier(0.02, 0.01, 0.21, 1);

  @keyframes zoom {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const Car = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  animation: drive 1.5s linear infinite;

  @keyframes drive {
    0% {
      transform: translateX(0) translateY(-1px) rotate(0);
    }

    25% {
      transform: translateX(-1px) rotate(1deg);
    }

    50% {
      transform: translateX(0) translateY(2px);
    }

    75% {
      transform: translateX(1px) rotate(-1deg);
    }

    100% {
      transform: translateX(0) translateY(-1px) rotate(0);
    }
  }
`;
