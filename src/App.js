//Build a shopping cart in a react-reux app where the total price updates dynamically 
//when items are added or removed ,
//using useSelector to access the cart state and useDispatch to modify it.
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
 import Navbar from './components/Navbar';
import AddItems from './components/AddItems';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/> 
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/AddItems" element={<AddItems/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
