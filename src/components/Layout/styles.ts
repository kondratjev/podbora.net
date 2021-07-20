import styled from "styled-components";

export const Container = styled.div<{ background: string }>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ background }) => background};
`;

export const Content = styled.div`
  margin-top: 92px;
  flex: 1;
`;
