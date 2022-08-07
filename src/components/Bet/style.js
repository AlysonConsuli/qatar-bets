import styled from "styled-components";

export const Bet = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 500px;
  border-radius: 6px;
  position: relative;
  padding: 0 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

export const UserName = styled.span`
  font-size: 18px;
  width: 37%;
  font-weight: 700;
`;
