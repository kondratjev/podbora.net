import styled, { css } from "styled-components";

export const Items = styled.div`
  display: flex;
  margin: 0 -30px;
`;

export const Item = styled.div`
  flex-basis: calc(100% / 3);
  max-width: calc(100% / 3);
  margin: 0 30px;
  padding: 24px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(168, 172, 185, 0.5);
  position: relative;

  display: flex;
  align-items: center;
`;

export const ItemIcon = styled.div`
  height: 60px;
  width: 60px;
`;

export const ItemContent = styled.div`
  margin-left: 14px;
`;

export const ItemTitle = styled.h6`
  color: #43b02a;
  margin-bottom: 6px;
`;

export const ItemDescription = styled.div`
  padding-right: 50px;
  font-size: 14px;
  font-weight: 400;
  color: #3b5172;
  line-height: 20px;
`;
