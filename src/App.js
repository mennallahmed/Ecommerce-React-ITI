
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import ProductInfo from './Component/ProductInfo';
import Products from './Component/Products';
import Annoucement from './Component/Annoucement';
import Categories from './Component/Categories';
import Error from './Component/Error';
import Footer from './Component/Footer';
import MyNavbar from './Component/MyNavbar';
import MySlider from './Component/MySlider';
import Newsletter from './Component/Newsletter';
import MyCart from './Component/MyCart';
import Checkout from './Component/Checkout';



function App() {

  return (
    <div className="App">
      <Annoucement/>
      <MyNavbar/>
      <Routes>
        <Route path='/' element={<> <MySlider/> <Categories/> <Newsletter/> </>}/>
        <Route path='/home' element={<><MySlider/> <Categories/> <Newsletter/> </>}/>
        <Route path='/about' element={<><About/></> }/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/mycart' element={<MyCart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/products/:id' element={<ProductInfo/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
