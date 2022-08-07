import styled from "styled-components";

export const AuthContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBackground};
  height: 100vh;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: underline;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 17px;
  }
`;

export const BoxAuthLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  margin-bottom: 18px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  h1 {
    font-size: 44px;
    margin-bottom: 7px;
    text-align: center;
  }
  span {
    font-size: 17px;
    text-align: center;
  }
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: calc(100vw / 12) solid transparent;
  border-right: calc(100vw / 12) solid transparent;
  border-bottom: calc(100vw / 12) solid ${({ theme }) => theme.colors.secondary};
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    border-left: calc(100vw / 24) solid transparent;
    border-right: calc(100vw / 24) solid transparent;
    border-bottom: calc(100vw / 24) solid
      ${({ theme }) => theme.colors.secondary};
  }
`;

export const BoxTriangle = styled.div`
  display: flex;
  position: fixed;
  bottom: calc(100vw / 6 - 1px);
  div:nth-child(7),
  div:nth-child(8),
  div:nth-child(9),
  div:nth-child(10),
  div:nth-child(11),
  div:nth-child(12) {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    bottom: 0;
    div:nth-child(7),
    div:nth-child(8),
    div:nth-child(9),
    div:nth-child(10),
    div:nth-child(11),
    div:nth-child(12) {
      display: block;
    }
  }
`;

export const AuthFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: calc(100vw / 6);
  position: fixed;
  bottom: 0;
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    display: none;
  }
`;
