/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "../../styles/style.js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Game } from "../../components/Game/index.jsx";

export const AddBets = () => {
  const URL = process.env.REACT_APP_API_URL;
  const [games, setGames] = useState([]);
  const { user } = useContext(UserContext);

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
      <S.Games>
        {games?.map((game) => (
          <Game key={game.id} />
        ))}
      </S.Games>
    </S.PageContainer>
  );
};
