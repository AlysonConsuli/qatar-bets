/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext.jsx";
import Modal from "react-modal";
import * as S from "../../styles/style.js";

export const Homepage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [logoutModal, setLogoutModal] = useState(false);
  Modal.setAppElement(document.querySelector(".root"));

  function logout() {
    setUser(null);
    localStorage.removeItem("users");
    navigate("/");
  }

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auto-login`, {}, config)
      .then(() => {})
      .catch(() => {
        logout();
      });
  }, []);

  return (
    <>
      <Modal
        isOpen={logoutModal}
        onRequestClose={() => setLogoutModal(false)}
        className="_"
        overlayClassName="_"
        contentElement={(props, children) => (
          <S.ModalStyle {...props}>{children}</S.ModalStyle>
        )}
        overlayElement={(props, contentElement) => (
          <S.OverlayStyle {...props}>{contentElement}</S.OverlayStyle>
        )}
      >
        <span>
          Are you sure you want <br /> to logout?
        </span>
        <div>
          <button onClick={() => setLogoutModal(false)}>No, go back</button>
          <button onClick={logout}>Yes, logout</button>
        </div>
      </Modal>
      <S.PageContainer>
        <S.Header>
          <h1>Qatar Bets</h1>
          <S.LogoutIcon onClick={() => setLogoutModal(true)}></S.LogoutIcon>
        </S.Header>
        <S.ArticleContainer>
          <Link to="/add-bets">
            <S.Article>
              <span>Add bets</span>
            </S.Article>
          </Link>
          <S.Article>
            <span>Show bets</span>
          </S.Article>
          <S.Article>
            <span>Ranking</span>
          </S.Article>
          <S.Article>
            <span>Games</span>
          </S.Article>
        </S.ArticleContainer>
      </S.PageContainer>
    </>
  );
};
