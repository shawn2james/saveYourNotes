import theme from './Theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/Global';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
