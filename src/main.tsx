import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import './index.css';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/globalCSS";
import { CreateCycleContext } from "./components/context/useContext";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <BrowserRouter>
      <StrictMode>
        <CreateCycleContext>
          <Router />
        </CreateCycleContext>
      </StrictMode>
    </BrowserRouter>
  </ThemeProvider>
);
