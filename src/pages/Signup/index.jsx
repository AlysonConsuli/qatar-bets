import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "../../components/Button/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import * as S from "../../styles/style.js";

export const SignUp = () => {
  const navigate = useNavigate();
  const URL = `${process.env.REACT_APP_API_URL}/sign-up`;

  const [userSignup, setUserSignup] = useState({
    name: "",
    password: "",
    passwordConfirmation: "",
  });
  const [disabled, setDisabled] = useState(false);

  async function createUser(e) {
    e.preventDefault();
    setDisabled(true);
    try {
      await axios.post(URL, userSignup);
      navigate("/");
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
      <S.AuthForm onSubmit={createUser}>
        <Input
          type="text"
          name="name"
          id="name"
          required
          placeholder="name"
          onChange={(e) =>
            setUserSignup({ ...userSignup, name: e.target.value })
          }
          value={userSignup.name}
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
            setUserSignup({ ...userSignup, password: e.target.value })
          }
          value={userSignup.password}
          disabled={disabled}
          minLength="4"
          message="Minimum of 4 characters"
        />
        <Input
          type="password"
          name="passwordConfirmation"
          id="passwordConfirmation"
          required
          placeholder="password confirmation"
          onChange={(e) =>
            setUserSignup({
              ...userSignup,
              passwordConfirmation: e.target.value,
            })
          }
          value={userSignup.passwordConfirmation}
          disabled={disabled}
          message="Password confirmation must ref password"
        />
        <Button type="submit" disabled={disabled} text="Sign Up" />
        <Link to="/">
          <span>Switch back to log in</span>
        </Link>
      </S.AuthForm>
    </S.AuthContainer>
  );
};
