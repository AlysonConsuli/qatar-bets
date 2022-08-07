/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GameResult } from "../../components/GameResult/index.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";
import * as S from "../../styles/style.js";

export const Games = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext);

  const [games, setGames] = useState([]);

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

  return (
    <S.PageContainer>
      <S.GamesResult>
        {games?.map((game) => (
          <GameResult key={game.id} game={game} />
        ))}
      </S.GamesResult>
    </S.PageContainer>
  );
};
