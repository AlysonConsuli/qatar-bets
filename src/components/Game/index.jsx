import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import * as S from "../../styles/style.js";
import { GameInput } from "../GameInput/index.jsx";
import Swal from "sweetalert2";

export const Game = ({ obj }) => {
  let bet, game, gameId;
  const URL = `${process.env.REACT_APP_API_URL}/bet`;
  const { user } = useContext(UserContext);

  if (obj?.game) {
    bet = obj;
    gameId = bet.game.id;
  } else {
    game = obj;
    gameId = game.id;
  }

  const [hasBet, setHasBet] = useState(bet);
  const score1 = bet ? bet.score1 : "";
  const score2 = bet ? bet.score2 : "";

  const [scores, setScores] = useState({
    score1,
    score2,
  });
  const [disabled, setDisabled] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  async function addBet(e) {
    e.preventDefault();
    setDisabled(true);
    try {
      await axios.post(URL, { gameId, ...scores }, config);
      setHasBet(true);
    } catch ({ response }) {
      setDisabled(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response?.data,
      });
    }
  }

  function editBet() {
    setHasBet(false);
    setDisabled(false);
  }

  return (
    <S.Game onSubmit={addBet}>
      <S.TeamName>{game?.team1.name || bet?.game.team1.name}</S.TeamName>
      <S.BoxInput>
        {hasBet ? (
          <span>{scores.score1}</span>
        ) : (
          <GameInput
            onChange={(e) => setScores({ ...scores, score1: +e.target.value })}
            value={scores.score1}
            disabled={disabled}
          />
        )}
        <p>x</p>
        {hasBet ? (
          <span>{scores.score2}</span>
        ) : (
          <GameInput
            onChange={(e) => setScores({ ...scores, score2: +e.target.value })}
            value={scores.score2}
            disabled={disabled}
          />
        )}
      </S.BoxInput>
      <S.TeamName>{game?.team2.name || bet?.game.team2.name}</S.TeamName>
      <S.CheckBox type="submit" disabled={disabled} $hasBet={hasBet}>
        <S.CheckIcon></S.CheckIcon>
      </S.CheckBox>
      <S.EditIcon onClick={editBet} $hasBet={hasBet}></S.EditIcon>
    </S.Game>
  );
};
