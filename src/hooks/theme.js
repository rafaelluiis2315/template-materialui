import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    type: "light", // Define o tipo de paleta como claro (light)
    primary: {
      main: "#2196f3", // Cor principal para o modo claro
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark", // Define o tipo de paleta como escuro (dark)
    primary: {
      main: "#2196f3", // Cor principal para o modo escuro
    },
  },
});

export { lightTheme, darkTheme };