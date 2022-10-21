import './App.css';
import {
  Address,
  Cart,
  Home,
  Login,
  OrderSuccess,
  PageNotFound,
  Payment,
  ProductDetail,
 
  Profile,
  Register
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from './components';

import Protected from "./auth/Protected"
import AddProduct from './pages/AddProduct';

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/addProduct'} element={<AddProduct />} />
        <Route path={'/cart'} element={<Cart />} />
        <Route path={'/product-detail/:id'} element={<ProductDetail />} />


        <Route path="/profile/*" element={<Protected element={<Profile />} />} />
        <Route path="/payment" element={<Protected element={<Payment />} />} />
        <Route path="/address" element={<Protected element={<Address />} />} />
        <Route path="/order-success" element={<Protected element={<OrderSuccess />} />} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
