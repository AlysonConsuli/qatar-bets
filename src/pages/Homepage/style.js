import styled from "styled-components";

import { FiLogOut } from "react-icons/fi";

export const PageContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBackground};
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  h1 {
    padding-left: 20px;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.text};
  }
  svg {
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const LogoutIcon = styled(FiLogOut)`
  font-size: 25px;
  cursor: pointer;
`;

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin: 0 auto;
  margin-top: 30px;
  width: 70%;
  max-width: 350px;
  @media (max-width: 350px) {
    width: 0;
    gap: 15px;
  }
`;

export const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  span {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondaryBackground};
  }
`;
