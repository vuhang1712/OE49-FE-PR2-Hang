import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Cart from "./components/Cart";
import PaymentInfo from "./components/PaymentInfo";
import ConfirmOrder from "./components/ConfirmOrder";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/payment" element={<PaymentInfo />}></Route>
        <Route path="/confirm-order" element={<ConfirmOrder />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
