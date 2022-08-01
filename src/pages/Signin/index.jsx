import { useState } from "react";
import Button from "../../components/Button/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import * as S from "../../styles/style.js";

export const Signin = () => {
  const [userSignin, setUserSignin] = useState({
    name: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false);

  return (
    <S.Signin>
      <Input
        type="text"
        name="username"
        id="username"
        required
        placeholder="nome"
        onChange={(e) => setUserSignin({ ...userSignin, name: e.target.value })}
        value={userSignin.name}
        disabled={disabled}
        message="Nome inválido"
      />
      <Input
        type="password"
        name="password"
        id="password"
        required
        placeholder="senha"
        onChange={(e) =>
          setUserSignin({ ...userSignin, password: e.target.value })
        }
        value={userSignin.password}
        disabled={disabled}
        minLength="4"
        message="Tamanho mínimo de 4 caracteres."
      />
      <Button type="submit" disabled={disabled} text="Login" />
    </S.Signin>
  );
};
