import React, { Component } from "react";
import Link from "next/link";

import {
  Container,
  Wrapper,
  Nav,
  NavCell,
  NavLink,
  Social,
  SocialLink
} from "./styles";

class Footer extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Nav>
            <NavCell>
              <Link href="/map">
                <NavLink>Создать заявку</NavLink>
              </Link>
              <Link href="/map">
                <NavLink>Найти на карте</NavLink>
              </Link>
              <Link href="/map">
                <NavLink>Рейтинги</NavLink>
              </Link>
            </NavCell>
            <NavCell>
              <Link href="/map">
                <NavLink>Создать заявку</NavLink>
              </Link>
              <Link href="/map">
                <NavLink>Найти на карте</NavLink>
              </Link>
              <Link href="/map">
                <NavLink>Рейтинги</NavLink>
              </Link>
            </NavCell>
            <NavCell>
              <Link href="/map">
                <NavLink>Пользовательское соглашение</NavLink>
              </Link>
              <Link href="/map">
                <NavLink>Политика конфиденциальности</NavLink>
              </Link>
            </NavCell>
          </Nav>
          <Social>
            <Link href="/auth/register">
              <SocialLink>VK</SocialLink>
            </Link>
            <Link href="/auth/login">
              <SocialLink>FB</SocialLink>
            </Link>
          </Social>
        </Wrapper>
      </Container>
    );
  }
}

export default Footer;
