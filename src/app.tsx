import React, { useMemo } from "react";
import "./styles/global.scss";
import AppRouter from "./router";
import { ReactQueryProvider } from "./contexts/react-query-provider";

function App() {
  return (
    <React.StrictMode>
      <ReactQueryProvider>
        {useMemo(() => <AppRouter />, [])}
      </ReactQueryProvider>
    </React.StrictMode>
  );
}

export default App;
