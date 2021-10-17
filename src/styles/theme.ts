import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#7bb1fc',
      dark: '#4a6a97',
      light: '#b0d0fd',
    },
    secondary: {
      // オレンジ
      main: '#F88FAB',
      dark: '#ae6478',
      light: '#fab1c4',
    },
    text: {
      primary: '#1f2937',
      secondary: '#525860',
    },
    background: {
      default: '#f4f5f6',
    },
  },
});
export default theme;
