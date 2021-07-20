import styled from "styled-components";

import DefaultButton from "src/components/Button";

export const Form = styled.div`
  width: 100%;
  max-width: 424px;
  margin: 48px auto;
  padding: 48px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 12px 32px rgba(38, 50, 56, 0.2);
  position: relative;
  z-index: 1;
`;

export const FormTitle = styled.h3`
  text-align: center;
`;

export const Socials = styled.div`
  margin-top: 24px;
  font-size: 0;
  text-align: center;
`;

export const SocialItem = styled.div`
  display: inline-flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  background: #fff;
  text-decoration: none !important;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(84, 110, 122, 0.24);
`;

export const Or = styled.p`
  margin-top: 16px;
  font-size: 18px;
  font-weight: 400;
  color: #9dacbf;
  line-height: 32px;
  text-align: center;
`;

export const Notification = styled.div`
  font-size: 11px;
  font-weight: 400;
  color: #9dacbf;
  line-height: 16px;
  margin-top: 24px;
`;

export const SubmitButton = styled(DefaultButton)`
  width: 100%;
  margin-top: 24px;
`;

export const SignIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const SignInText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #72808d;
  line-height: 16px;
  text-align: center;
  margin-bottom: 0;
`;

export const SignInLink = styled.span`
  -webkit-appearance: none;
  font-size: 12px;
  font-weight: 500;
  color: #72808d;
  line-height: 18px;
  display: inline-block;
  vertical-align: middle;
  padding: 7px 20px;
  background: #9dacbf;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none !important;
  letter-spacing: 0.03em;
  border: 0;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  font: 500 14px Roboto;

  background: 0 0;

  padding: 0;
  font-size: 11px;
  font-weight: 500;
  color: #72808d;
  line-height: 20px;

  color: #0762c8;

  margin-left: 12px;
`;
