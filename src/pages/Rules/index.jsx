import * as S from "../../styles/style.js";

export const Rules = () => {
  return (
    <S.PageContainer>
      <S.Rules>
        <h1>Rules Qatar Bets</h1>
        <ul>
          <li>If you hit the exact score of the game, you get 10 points.</li>
          <li>If you hit the winner and only one score, you get 7 points.</li>
          <li>If you hit only the winner, you get 5 points.</li>
          <li>
            If you miss the winner, but hit one of the scores, you get 2 points.
          </li>
          <li>If you get everything wrong, you don't score.</li>
          <li>
            The first place will win 80% of the prize. The second place will win
            15% of the prize. The third place will win 5% of the prize.
          </li>
          <li>To participate, you have to pay 20 reais to Admin.</li>
          <li>The total value of the prize is at xxx reais at the moment</li>
        </ul>
        <h2>Good luck and enjoy!!!</h2>
      </S.Rules>
    </S.PageContainer>
  );
};
