import styled from "styled-components";

export const GameBets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 7px;
  margin: 17px 0;

  h3 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 5px;
    display: flex;
    gap: 5px;
    align-items: center;
    width: 90%;
    span:first-child {
      width: 45%;
      text-align: right;
    }
    span:last-child {
      width: 45%;
      text-align: left;
    }
    p {
      position: absolute;
      top: 100px;
      left: calc(50% - 167px);
      text-align: center;
      @media (max-width: 350px) {
        left: 0;
      }
    }
  }
`;
