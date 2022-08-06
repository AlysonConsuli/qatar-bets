import { Link } from "react-router-dom";
import * as S from "../../styles/style.js";

export const Homepage = () => {
  return (
    <S.PageContainer>
      <S.ArticleContainer>
        <Link to="/add-bets">
          <S.Article>
            <span>Add bets</span>
          </S.Article>
        </Link>
        <Link to="/games">
          <S.Article>
            <span>Games</span>
          </S.Article>
        </Link>
        <Link to="/ranking">
          <S.Article>
            <span>Ranking</span>
          </S.Article>
        </Link>
        <Link to="/rules">
          <S.Article>
            <span>Rules</span>
          </S.Article>
        </Link>
      </S.ArticleContainer>
    </S.PageContainer>
  );
};
