import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  border-top: 1px solid rgba(145, 148, 162, 0.2);
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

export const Nav = styled.nav`
  display: flex;
`;

export const NavCell = styled.div`
  padding-right: 24px;
`;

export const NavLink = styled.span`
  display: block;
  cursor: pointer;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #3b5172;
  line-height: 20px;
  text-decoration: none;
`;

export const Social = styled.div``;

export const SocialLink = styled.span``;
