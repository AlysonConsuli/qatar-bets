import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import * as S from "../../styles/style.js";

export const Signin = () => {
  const [userSignin, setUserSignin] = useState({
    name: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false);

  function handleLogin(event) {
    event.preventDefault();
    setDisabled(true);
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
      <S.BoxTriangle>
        <S.Triangle></S.Triangle>
        <S.Triangle></S.Triangle>
        <S.Triangle></S.Triangle>
        <S.Triangle></S.Triangle>
        <S.Triangle></S.Triangle>
        <S.Triangle></S.Triangle>
        <S.Triangle></S.Triangle>
        <S.Triangle></S.Triangle>
        <S.Triangle></S.Triangle>
        <S.Triangle></S.Triangle>
        <S.Triangle></S.Triangle>
        <S.Triangle></S.Triangle>
      </S.BoxTriangle>
      <S.AuthFooter></S.AuthFooter>
    </S.AuthContainer>
  );
};
