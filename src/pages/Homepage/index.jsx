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
        <S.Article>
          <span>Show bets</span>
        </S.Article>
        <S.Article>
          <span>Ranking</span>
        </S.Article>
        <S.Article>
          <span>Games</span>
        </S.Article>
      </S.ArticleContainer>
    </S.PageContainer>
  );
};
