import React, { useMemo } from "react";
import "./styles/global.scss";
import AppRouter from "./router";
import { ReactQueryProvider } from "./contexts/react-query-provider";
import { ThemeProvider } from "./contexts/theme-provider";
import Snow from "./components/snow/Snow";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <ReactQueryProvider>
          <>
            <Snow />
            {useMemo(
              () => (
                <AppRouter />
              ),
              []
            )}
          </>
        </ReactQueryProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
