import styled from "styled-components";

export const Form = styled.div`
  width: 100%;
  max-width: 840px;
  margin: 48px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 12px 32px rgba(38, 50, 56, 0.2);
  position: relative;
  z-index: 1;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 48px 32px 48px;
  border-bottom: 1px solid rgba(145, 148, 162, 0.2);
`;

export const FormStep = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: #fff;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 12px 32px rgba(168, 172, 185, 0.5);
  color: #0762c8;
`;

export const FormTitle = styled.h4`
  margin-left: 32px;
`;

export const FormContent = styled.div`
  padding: 26px 48px 48px 48px;
`;

export const FormLabel = styled.p`
  margin-bottom: 18px;
  font-size: 16px;
  font-weight: 400;
  color: #72808d;
  line-height: 24px;
`;

export const Marks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Mark = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 25%;
  max-width: 25%;
  margin-bottom: 24px;
`;

export const MarkIcon = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const MarkName = styled.p`
  margin-bottom: 0;
  margin-left: 10px;
  font-size: 18px;
`;
