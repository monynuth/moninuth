import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import { CartProvider } from './Component/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
