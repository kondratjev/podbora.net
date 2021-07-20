import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import Link from "next/link";

import LogoImg from "src/assets/images/logo.svg";

import {
  Container,
  Wrapper,
  Logo,
  LogoImage,
  LogoInfo,
  LogoCity,
  Nav,
  NavLink,
  Auth,
  AuthLink,
  Modal,
  ModalContent
} from "./styles";

@observer
class Header extends Component {
  @observable isCollapsed: boolean = false;
  @observable isCityMenuOpen: boolean = false;

  componentDidMount() {
    this.isCollapsed = window.scrollY > 10;
    window.addEventListener("scroll", () => {
      this.isCollapsed = window.scrollY > 10;
    });
  }

  toggleCityMenu = () => {
    this.isCityMenuOpen = !this.isCityMenuOpen;
  };

  render() {
    return (
      <>
        <Container isCollapsed={this.isCollapsed}>
          <Wrapper>
            <Logo>
              <Link href="/">
                <LogoImage src={LogoImg} />
              </Link>
              <LogoInfo>
                Подбор автомобиля <br /> в{" "}
                <LogoCity onClick={this.toggleCityMenu}>Тольятти</LogoCity>
              </LogoInfo>
            </Logo>
            <Nav>
              <Link href="/request">
                <NavLink>Создать заявку</NavLink>
              </Link>
              <Link href="/search">
                <NavLink>Найти сервис</NavLink>
              </Link>
              <Link href="/ratings">
                <NavLink>Рейтинги</NavLink>
              </Link>
            </Nav>
            <Auth>
              <Link href="/auth/register">
                <AuthLink>Зарегистрироваться</AuthLink>
              </Link>
              <Link href="/auth/login">
                <AuthLink>Войти</AuthLink>
              </Link>
            </Auth>
          </Wrapper>
        </Container>
        {this.isCityMenuOpen && (
          <Modal>
            <ModalContent>asd</ModalContent>
          </Modal>
        )}
      </>
    );
  }
}

export default Header;
