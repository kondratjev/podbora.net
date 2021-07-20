import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  font-size: 16px;
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

  &:focus {
    outline: none;
  }
`;

export const Placeholder = styled.span<{ isFocused: boolean }>`
  font-size: 16px;
  font-weight: 400;
  color: #9dacbf;
  line-height: 24px;
  display: inline-block;
  vertical-align: middle;
  max-width: calc(100% - 48px);
  padding: 0 0;
  background: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
  position: absolute;
  left: 24px;
  top: 12px;
  z-index: -1;
  transition: 0.3s;

  ${({ isFocused }) =>
    isFocused &&
    css`
      font-size: 12px;
      font-weight: 400;
      color: #72808d;
      line-height: 16px;
      padding: 0 2px;
      background: #fff;
      left: 21px;
      top: -8px;
      z-index: 5;
    `}
`;

export const ClearIcon = styled.button<{ isVisible: boolean }>`
  border: none;
  background-color: transparent;
  padding: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 36px;
  height: 100%;
  max-height: 48px;
  background: 0 0;
  border: 0;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  right: -6px;
  top: 0;
  z-index: 3;
  cursor: pointer;
  transition: 0.3s;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      visibility: visible;
      right: 0;
    `}

  &:focus {
    outline: none;
  }
`;
