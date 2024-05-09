import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Productlist from './pages/Productlist';
import Singleview from './pages/Singleview';




function App() {
  return (
    <div className="App">
      <Header></Header>
   <Routes>
    <Route path='/' element={<Productlist></Productlist>}></Route>
    <Route path='/singleview/:id' element={<Singleview></Singleview>}></Route>
      

      
  </Routes>   
      <Footer></Footer>
   
    </div>
  );
}

export default App;
