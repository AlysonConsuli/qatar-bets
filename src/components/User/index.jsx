import * as S from "../../styles/style.js";
import { useNavigate } from "react-router-dom";

export const User = ({ user, position }) => {
  const navigate = useNavigate();

  function seeBets() {
    navigate(`/bets/user/${user.id}`);
  }

  return (
    <S.User>
      <span>{user.name}</span>
      <span>{user.points}</span>
      <span>{position}º</span>
      <S.EyeIcon onClick={seeBets}></S.EyeIcon>
    </S.User>
  );
};
