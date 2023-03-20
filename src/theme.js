import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    common: { white: '#fff', black: 'rgba(29, 29, 29, 1)' },
    background: { paper: '#fff', default: '#fafafa' },
    primary: {
      main: 'rgba(254, 211, 0, 1)',
      light: 'rgba(254, 211, 0, 1)',
      contrastText: 'rgba(29, 29, 29, 1)',
      dark: 'rgba(254, 211, 0, 1)'
    },
    secondary: {
      main: 'rgba(29, 29, 29, 1)',
      light: 'rgba(29, 29, 29, 1)',
      contrastText: 'rgba(254, 211, 0, 1)',
      dark: 'rgba(29, 29, 29, 1)'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(29, 29, 29, 1)',
      secondary: 'rgba(102, 102, 102, 1)',
      disabled: 'rgba(211, 211, 211, 1)',
      hint: 'rgba(153, 153, 153, 1)'
    },
    action: {
      disabledBackground: 'rgba(129,129,129, 0.9)'
    }
  }
});

export default theme;