import styled, { css } from "styled-components";

export const Switcher = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const SwitcherItem = styled.div<{ isActive: string }>`
  font-size: 14px;
  font-weight: 500;
  color: #72808d;
  line-height: 20px;
  display: inline-block;
  width: 160px;
  padding: 11px 0 10px 0;
  background: #fff;
  text-transform: uppercase;
  text-align: center;
  border: 1px solid #9dacbf;
  cursor: pointer;
  position: relative;
  transition: 0.3s;

  ${({ isActive }) =>
    isActive &&
    css`
      background: #0762c8;
      border: 1px solid #0762c8;
      color: #fff;
    `}

  &:first-child {
    border-radius: 30px 0 0 30px;
  }

  &:last-child {
    border-radius: 0 30px 30px 0;
  }
`;

export const Items = styled.div`
  display: flex;
  margin: 0 -30px;
`;

export const Item = styled.div`
  flex: 1;
  padding: 0 30px;
`;

export const ItemTitle = styled.h5`
  margin-bottom: 16px;
`;

export const ItemDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #3b5172;
  line-height: 32px;
`;
