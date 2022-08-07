/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Result } from "../../components/Result";
import { UserContext } from "../../contexts/UserContext";
import * as S from "../../styles/style.js";

export const Results = () => {
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
      <S.GameBets>
        {games?.map((game) => (
          <Result key={game.id} game={game} />
        ))}
      </S.GameBets>
    </S.PageContainer>
  );
};
