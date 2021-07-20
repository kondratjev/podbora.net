import styled, { css } from "styled-components";

export const Container = styled.header<{ isCollapsed: boolean }>`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: 0.3s ease;
  background: #fff;
  padding: ${({ isCollapsed }) => (isCollapsed ? "20px 0" : "30px 0")};

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      box-shadow: 0 2px 4px rgba(168, 172, 185, 0.5);
    `}
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 100px;
  max-width: 1520px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
`;

export const LogoImage = styled.img`
  height: 30px;
  cursor: pointer;
`;

export const LogoInfo = styled.span`
  margin-left: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #9dacbf;
  line-height: 16px;
  letter-spacing: 0.03em;
`;

export const LogoCity = styled.span`
  cursor: pointer;
  color: #3b5172;
`;

export const Nav = styled.nav``;

export const NavLink = styled.span`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #3b5172;
  line-height: 22px;
  text-transform: uppercase;
  margin: 0 15px;
`;

export const Auth = styled.div``;

export const AuthLink = styled.span`
  cursor: pointer;
  font-size: 14px;
  color: #3b5172;
  line-height: 20px;
  margin: 0 15px;

  &:hover {
    color: #064ea0;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.55);
`;

export const ModalContent = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px;
  box-sizing: border-box;
  transform: scale(0.96);
  background: rgb(255, 255, 255);
  border-radius: 10px;
  transition: opacity 150ms ease 0s, transform;
  flex: 0 0 auto;
  width: 1020px;
`;
