import styled from "styled-components";

export const User = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 60px;
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
    width: 125px;
    text-align: left;
  }
  span:nth-child(2) {
    position: absolute;
    left: 45%;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    span:nth-child(2) {
      left: 47%;
    }
  }
`;
