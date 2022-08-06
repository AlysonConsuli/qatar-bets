/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import Swal from "sweetalert2";
import * as S from "../../styles/style.js";
import { UserContext } from "../../contexts/UserContext.jsx";

export const Signin = () => {
  const navigate = useNavigate();
  const URL = `${process.env.REACT_APP_API_URL}/sign-in`;

  const [userSignin, setUserSignin] = useState({
    name: "",
    password: "",
  });
  const { user, setUser } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setDisabled(true);
    try {
      const res = await axios.post(URL, userSignin);
      const { name, token } = res.data;
      setUser({ ...user, name, token });
      const userSerialized = JSON.stringify({
        name,
        token,
      });
      localStorage.setItem("user", userSerialized);
      navigate("/homepage");
    } catch ({ response }) {
      setDisabled(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.data,
      });
    }
  }

  return (
    <S.AuthContainer>
      <S.BoxAuthLogo>
        <h1>Qatar Bets</h1>
        <span>the best way to experience a world cup</span>
      </S.BoxAuthLogo>
      <S.AuthForm onSubmit={handleLogin}>
        <Input
          type="text"
          name="username"
          id="username"
          required
          placeholder="name"
          onChange={(e) =>
            setUserSignin({ ...userSignin, name: e.target.value })
          }
          value={userSignin.name}
          disabled={disabled}
          message="Invalid name"
        />
        <Input
          type="password"
          name="password"
          id="password"
          required
          placeholder="password"
          onChange={(e) =>
            setUserSignin({ ...userSignin, password: e.target.value })
          }
          value={userSignin.password}
          disabled={disabled}
          minLength="4"
          message="Minimum of 4 characters"
        />
        <Button type="submit" disabled={disabled} text="Login" />
        <Link to="/sign-up">
          <span>First time? Create an account!</span>
        </Link>
      </S.AuthForm>
    </S.AuthContainer>
  );
};
