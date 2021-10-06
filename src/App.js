import theme from './Theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/Global';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header /> 
      <Main />
    </ThemeProvider>
  );
}

export default App;
