import * as S from "../../styles/style.js";

export const Bet = ({ bet }) => {
  return (
    <S.Bet>
      <S.UserName>{bet.user.name}</S.UserName>
      <S.BoxInput>
        {<span>{bet.score1}</span>}
        <p>x</p>
        {<span>{bet.score2}</span>}
      </S.BoxInput>
      <S.Points>{bet.points !== null ? `${bet.points} pts` : ""}</S.Points>
    </S.Bet>
  );
};
