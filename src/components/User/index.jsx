import * as S from "../../styles/style.js";

export const User = ({ user, position }) => {
  return (
    <S.User>
      <span>{user.name}</span>
      <span>{user.points}</span>
      <span>{position}º</span>
    </S.User>
  );
};
