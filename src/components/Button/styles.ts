import styled from "styled-components";

export const Container = styled.button`
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.03em;
  border-radius: 30px;
  position: relative;
  cursor: pointer;

  padding: 11px 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  height: 48px;

  background: #0762c8;
  color: #fff;
  border: 1px solid #0762c8;
  box-shadow: 0 4px 8px rgba(31, 93, 234, 0.5);

  transition: 0.3s;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #064ea0;
    border: 1px solid #064ea0;
    box-shadow: none;
  }
`;
