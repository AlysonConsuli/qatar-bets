/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bet } from "../../components/Bet";
import { Loading } from "../../components/Loading";
import { UserContext } from "../../contexts/UserContext";
import * as S from "../../styles/style.js";
import { alertError } from "../../utils/alertError";
import { config } from "../../utils/config";

export const GameBets = () => {
  const { gameId } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext);

  const [bets, setBets] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/bets/game/${gameId}`, config(user))
      .then(({ data }) => setBets(data.bets))
      .catch((error) => alertError(error));
  }, []);

  if (bets === null) {
    return <Loading />;
  }

  return (
    <S.PageContainer>
      <S.GameBets>
        <S.GameTitle>
          <span>{bets[0]?.game.team1.name}</span>
          <span>
            {bets[0]?.game.score1 !== null ? bets[0]?.game.score1 : "-"}
          </span>
          {bets[0]?.game ? (
            <span>x</span>
          ) : (
            <p>There are no bets for this game</p>
          )}
          <span>
            {bets[0]?.game.score2 !== null ? bets[0]?.game.score2 : "-"}
          </span>
          <span>{bets[0]?.game.team2.name}</span>
        </S.GameTitle>
        {bets?.map((bet) => (
          <Bet key={bet.id} bet={bet} />
        ))}
      </S.GameBets>
    </S.PageContainer>
  );
};
