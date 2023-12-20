
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Topdestinations from './pages/topdestination/TopDestinations';
import SinglePage from "./pages/topdestination/SinglePage"
import Footer from './components/footer/Footer';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/topdestinations" element={<Topdestinations />} />
        <Route  path="/single/:id" element={<SinglePage />} />
        </Routes>
        <Footer/>
  </BrowserRouter>
  );

}

export default App;
