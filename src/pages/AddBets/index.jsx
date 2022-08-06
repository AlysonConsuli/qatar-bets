/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "../../styles/style.js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Game } from "../../components/Game/index.jsx";

export const AddBets = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext);

  const [games, setGames] = useState([]);
  const [userBets, setUserBets] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  useEffect(() => {
    axios
      .get(`${URL}/games`, config)
      .then(({ data }) => {
        console.log(data);
        setGames(data.games);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/bets?groupBy=user`, config)
      .then(({ data }) => {
        console.log(data);
        setUserBets(data.bets);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);

  function verifyHasBet(game) {
    let userBet = false;
    for (let i = 0; i < userBets.length; i++) {
      const bet = userBets[i];
      if (bet.game.id === game.id) {
        userBet = bet;
        break;
      }
    }
    return userBet;
  }

  return (
    <S.PageContainer>
      <S.Games>
        {games?.map((game) => {
          const userBet = verifyHasBet(game);
          if (!userBet) {
            return <Game key={game.id} obj={game} />;
          }
          return "";
        })}
        {userBets?.map((bet) => {
          return <Game key={bet.game.id} obj={bet} />;
        })}
      </S.Games>
    </S.PageContainer>
  );
};