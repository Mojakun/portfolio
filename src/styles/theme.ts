import { createTheme } from '@material-ui/core/styles'
const theme = createTheme({
    
    palette: {
        primary: {
        // 緑色
            main: "#355C7D",
            dark: "#689F38",
            light: "#DCEDC8"
        },
        secondary: {
        // オレンジ
            main: "#FF5722"
        },
        text: {
        // ちょっと薄い黒
            primary: "#212121",
            secondary: "#757575"
        }
    }
});
export default theme;