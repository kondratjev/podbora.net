import React, { Component } from "react";

import Layout, { BackgroundEnum } from "src/components/Layout";
import Container from "src/components/Container";
import TextInput from "src/components/TextInput";
import Link from "next/link";

import {
  Form,
  FormTitle,
  Socials,
  SocialItem,
  Or,
  Notification,
  SubmitButton,
  SignIn,
  SignInText,
  SignInLink
} from "./styles";

class Register extends Component {
  render() {
    return (
      <Layout background={BackgroundEnum.Gray}>
        <Container>
          <Form>
            <FormTitle>Регистрация</FormTitle>
            <Socials>
              <SocialItem>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#0862c7"
                    d="M9.99693 8.79199V12.0331H15.3496C15.1286 13.4203 13.7291 16.0967 9.99693 16.0967C6.78041 16.0967 4.15318 13.4326 4.15318 10.1424C4.15318 6.85226 6.78041 4.1882 9.99693 4.1882C11.8262 4.1882 13.0539 4.97391 13.7536 5.64914L16.3195 3.1815C14.6744 1.6469 12.5382 0.713867 9.99693 0.713867C4.7793 0.713867 0.568359 4.9248 0.568359 10.1424C0.568359 15.3601 4.7793 19.571 9.99693 19.571C15.4355 19.571 19.0449 15.7407 19.0449 10.3634C19.0449 9.73731 18.9835 9.27079 18.8976 8.79199H9.99693Z"
                  />
                </svg>
              </SocialItem>
            </Socials>
            <Or>или</Or>
            <TextInput placeholder="Имя" />
            <TextInput placeholder="Почта" />
            <TextInput placeholder="Номер телефона" />
            <TextInput placeholder="Пароль" />
            <Notification>
              Нажимая кнопку «Зарегистрироваться», я соглашаюсь с тем, что мной
              прочитаны и приняты Условия использования и Политика
              конфиденциальности.
            </Notification>
            <SubmitButton>Зарегистрироваться</SubmitButton>
            <SignIn>
              <SignInText>У вас уже есть аккаунт?</SignInText>
              <Link href="/auth/login">
                <SignInLink>Войти</SignInLink>
              </Link>
            </SignIn>
          </Form>
        </Container>
      </Layout>
    );
  }
}

export default Register;
