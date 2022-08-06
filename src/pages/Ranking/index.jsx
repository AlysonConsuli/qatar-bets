/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { User } from "../../components/User/index.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";
import * as S from "../../styles/style.js";

export const Ranking = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext);

  const [ranking, setRanking] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  useEffect(() => {
    axios
      .get(`${URL}/users/ranking`, config)
      .then(({ data }) => {
        console.log(data.ranking);
        setRanking(data.ranking);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);

  return (
    <S.PageContainer>
      <S.rankingHeader>
        <span>Name</span>
        <span>Points</span>
        <span>Position</span>
      </S.rankingHeader>
      <S.Users>
        {ranking?.map((user, i) => (
          <User key={user.id} user={user} position={i + 1} />
        ))}
      </S.Users>
    </S.PageContainer>
  );
};
