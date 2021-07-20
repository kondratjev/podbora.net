import styled from "styled-components";

import ReviewStar from "src/assets/images/review_star.svg";

export const Items = styled.div``;

export const Item = styled.div`
  padding: 32px 48px;
  border-bottom: 1px solid rgba(145, 148, 162, 0.2);
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(168, 172, 185, 0.5);
  margin-bottom: 30px;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const ItemUserAvatar = styled.div`
  height: 40px;
  width: 40px;
  background-color: #ccc;
  border-radius: 50%;
`;

export const ItemUserContent = styled.div`
  margin-left: 12px;
`;

export const ItemUserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

export const ItemUserName = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #3b5172;
  line-height: 24px;
`;

export const ItemUserDate = styled.span`
  margin-left: 6px;
  font-size: 12px;
  font-weight: 400;
  color: #9dacbf;
  line-height: 24px;
`;

export const ItemUserReview = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemStar = styled.div`
  background-image: url(${ReviewStar});
  background-size: contain;
  height: 12px;
  width: 12px;

  &:not(:first-child) {
    margin-left: 4px;
  }
`;

export const ItemService = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const ItemServiceAvatar = styled.div`
  height: 40px;
  width: 40px;
  background-color: #ccc;
  border-radius: 50%;
`;

export const ItemServiceContent = styled.div`
  margin-right: 12px;
`;

export const ItemServiceName = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #3b5172;
  line-height: 24px;
  margin-bottom: 2px;
`;

export const ItemServiceReview = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ItemText = styled.div`
  font-size: 14px;
  color: #787c8e;
  line-height: 22px;
`;

export const MoreButton = styled.button`
  -webkit-appearance: none;
  font-size: 12px;
  font-weight: 500;
  color: #72808d;
  line-height: 18px;
  padding: 7px 20px;
  background: #9dacbf;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none !important;
  letter-spacing: 0.03em;
  border: 0;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  font: 500 14px Roboto;

  padding: 11px 30px;
  font-size: 16px;
  font-weight: 500;
  color: #72808d;
  line-height: 24px;
  height: 48px;

  margin: 0 auto;
  display: block;

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
