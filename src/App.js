import './App.css';
import Header from './components/partials/header';
import Footer from './components/partials/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { MenuProvider } from './context/MenuContext';
import MainScreen from './screens/mainScreen';
// import EventScreen from './screens/eventScreen';

function App() {
  return (
    <MenuProvider>
      <Page>
       
          <Router>
          <Header/>
            <Routes>
                <Route path="/" element={<MainScreen />} />
                {/* <Route path='/event' element={<EventScreen/>} /> */}
            </Routes>
            <Footer/>
          </Router>
        
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
