/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bet } from "../../components/Bet";
import { UserContext } from "../../contexts/UserContext";
import * as S from "../../styles/style.js";

export const GameBets = () => {
  const { gameId } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext);

  const [bets, setBets] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  useEffect(() => {
    axios
      .get(`${URL}/bets/game/${gameId}`, config)
      .then(({ data }) => {
        console.log(data);
        setBets(data.bets);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);
  return (
    <S.PageContainer>
      <S.GameBets>
        <h3>
          <span>{bets[0]?.game.team1.name}</span>
          <span>{bets[0]?.game.score1}</span>
          {bets[0]?.game ? (
            <span>x</span>
          ) : (
            <p>There are no bets for this game</p>
          )}
          <span>{bets[0]?.game.score2}</span>
          <span>{bets[0]?.game.team2.name}</span>
        </h3>
        {bets?.map((bet) => (
          <Bet key={bet.id} bet={bet} />
        ))}
      </S.GameBets>
    </S.PageContainer>
  );
};
