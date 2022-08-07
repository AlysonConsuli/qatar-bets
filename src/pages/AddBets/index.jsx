/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "../../styles/style.js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Game } from "../../components/Game/index.jsx";
import { ThreeDots } from "react-loader-spinner";

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
        setUserBets(data);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);

  function verifyHasBet(game) {
    let userBet = false;
    for (let i = 0; i < userBets.bets.length; i++) {
      const bet = userBets.bets[i];
      if (bet.game.id === game.id) {
        userBet = bet;
        break;
      }
    }
    return userBet;
  }

  if (!games || userBets.bets === undefined) {
    return (
      <S.Loading>
        <ThreeDots color="#fff" height="100" width="100" ariaLabel="loading" />
      </S.Loading>
    );
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
        {userBets.bets?.map((bet) => {
          return <Game key={bet.game.id} obj={bet} />;
        })}
      </S.Games>
    </S.PageContainer>
  );
};
