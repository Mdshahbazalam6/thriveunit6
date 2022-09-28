import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import {Routes, Route} from "react-router-dom"
import MorePage from './components/MorePage';
import Cart from './components/Cart';
function App() {
  return (
    <>
    {/* <Nav />
    <Home /> */}
    <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/:id' element={<MorePage/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>

  </Routes>
    </>
  );
}

export default App;
