import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

import './App.css';

import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "./hooks/ColorModeContext";
import { CssBaseline } from "@mui/material";

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline className="App">
          <Header />
          <ListarTarefa />
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
