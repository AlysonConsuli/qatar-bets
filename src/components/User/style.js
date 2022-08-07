import styled from "styled-components";

export const User = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 500px;
  border-radius: 6px;
  padding: 0 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  position: relative;
  span {
    width: 22px;
    text-align: center;
  }
  span:first-child {
    width: 39%;
    text-align: left;
    font-size: 17px;
    font-weight: 700;
    word-break: break-word;
  }
  span:nth-child(2) {
    position: absolute;
    left: 45%;
  }
  &:first-child {
    span:nth-child(3) {
      background-color: #ffd700;
      border-radius: 50%;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &:nth-child(2) {
    span:nth-child(3) {
      background-color: #9a9a9a;
      border-radius: 50%;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &:nth-child(3) {
    span:nth-child(3) {
      background-color: #cd7f32;
      border-radius: 50%;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    span:nth-child(2) {
      left: 47%;
    }
  }
`;
