/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserPayment } from "../../components/UserPayment/index.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";
import * as S from "../../styles/style.js";

export const UsersPayment = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext);

  const [users, setUsers] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  useEffect(() => {
    axios
      .get(`${URL}/users`, config)
      .then(({ data }) => {
        console.log(data.users);
        setUsers(data.users);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);

  return (
    <S.PageContainer>
      <S.rankingHeader>
        <span>Name</span>
        <span>It's paid?</span>
      </S.rankingHeader>
      <S.Users>
        {users?.map((user, i) => (
          <UserPayment key={user.id} user={user} config={config} />
        ))}
      </S.Users>
    </S.PageContainer>
  );
};
