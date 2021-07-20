import styled from "styled-components";

import TextInput from "src/components/TextInput";
import Button from "src/components/Button";

import ReviewStar from "src/assets/images/review_star.svg";
import ReviewStarOutlined from "src/assets/images/review_star_outlined.svg";

export const SearchContainer = styled.div`
  padding: 32px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(84, 110, 122, 0.24);
  position: relative;
  z-index: 2;
  margin-top: 48px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled(TextInput)`
  width: 100%;
`;

export const SearchButton = styled(Button)`
  margin-left: 16px;
`;

export const Grid = styled.div`
  margin-top: 48px;
  display: flex;
`;

export const Services = styled.div`
  flex-basis: 70%;
  max-width: 70%;
  padding-right: 48px;
`;

export const Filter = styled.div`
  flex-basis: 30%;
  max-width: 30%;
`;

export const Service = styled.div`
  padding: 20px 24px 20px 32px;
  background: #fff;
  text-align: left;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(168, 172, 185, 0.5);
  position: relative;
  margin-bottom: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(168, 172, 185, 0.5);
  }
`;

export const ServiceRight = styled.div`
  text-align: right;
  margin-left: auto;
`;

export const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const ServiceAvatar = styled.div`
  height: 40px;
  width: 40px;
  background-color: #ccc;
  border-radius: 50%;
`;

export const ServiceContent = styled.div`
  margin-left: 12px;
`;

export const ServiceName = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #3b5172;
  line-height: 24px;
  margin-bottom: 2px;
`;

export const ServiceReview = styled.div`
  display: flex;
  align-items: center;
`;

export const ServiceStar = styled.div`
  background-image: url(${ReviewStar});
  background-size: contain;
  height: 12px;
  width: 12px;

  &:not(:first-child) {
    margin-left: 4px;
  }
`;

export const ServiceStarOutlined = styled.div`
  background-image: url(${ReviewStarOutlined});
  background-size: contain;
  height: 12px;
  width: 12px;

  &:not(:first-child) {
    margin-left: 4px;
  }
`;

export const ServiceReviewCount = styled.span`
  margin-left: 6px;
  font-size: 12px;
  font-weight: 400;
  color: #9dacbf;
  line-height: 1;
`;

export const ServiceAddress = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  color: #3b5172;
  line-height: 22px;
  margin-top: 10px;
`;

export const ServicePrice = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #3b5172;
  line-height: 20px;
  position: relative;
  z-index: 1;
  margin-bottom: 4px;
`;

export const ServiceType = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #72808d;
  line-height: 16px;
`;

export const FilterItem = styled.div`
  margin-bottom: 30px;
`;

export const FilterItemTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #72808d;
  line-height: 24px;
  letter-spacing: 0.1px;
  margin-bottom: 8px;
`;

export const FilterItemVariants = styled.div``;

export const FilterItemVariant = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #3b5172;
  line-height: 20px;
  display: inline-block;
  vertical-align: top;
  padding: 6px 12px 4px 12px;
  border: 1px solid rgba(145, 148, 162, 0.2);
  border-radius: 500px;
  cursor: pointer;
  margin-right: 8px;
  margin-bottom: 0;
`;
