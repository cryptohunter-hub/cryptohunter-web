import './App.css';
import Header from './components/partials/header';
import Footer from './components/partials/footer';
import styled from 'styled-components';
import { MenuProvider } from './components/context/MenuContext';
import MainScreen from './screens/mainScreen';

function App() {
  return (
    <MenuProvider>
          <Page>
        <Header/>
        <MainScreen/>
        <Footer/>
    </Page>
    </MenuProvider>

  );
}
const Page = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 84px;
    @media (max-width:992px) {
      padding-top: 114px;
    }
`
export default App;
