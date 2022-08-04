import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "./contexts/UserContext";
import { Homepage } from "./pages/Homepage";
import { Signin } from "./pages/Signin";
import { SignUp } from "./pages/Signup";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
};
