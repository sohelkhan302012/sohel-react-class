
import { BrowserRouter , Route, Routes} 
from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
  <>
   <Header/>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/about' element={<About/>}></Route>
     
    </Routes>
    </BrowserRouter>
   <Footer/>
   
   </>
  );
}

export default App;
