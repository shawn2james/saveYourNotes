import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.normalFontStack};
        font-weight: normal;
        font-style: normal;
        background-color: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.light};
    }

    a { 
        text-decoration: none; 
        color: ${({ theme }) => theme.colors.light};
    }
`

export default GlobalStyles;