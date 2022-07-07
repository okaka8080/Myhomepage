import { createTheme } from "@mui/material";
import "./Font.scss";

export const DotTheme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
    },
    typography: {
        fontFamily: ['DotGothic16'].join(','),
    }
});