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
          <span>Games Result</span>
        </S.Article>
        <Link to="/ranking">
          <S.Article>
            <span>Ranking</span>
          </S.Article>
        </Link>
        <S.Article>
          <span>Extras</span>
        </S.Article>
      </S.ArticleContainer>
    </S.PageContainer>
  );
};
