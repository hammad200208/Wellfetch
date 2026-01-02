import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Allergy from "./pages/allergy/Allergy.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Billing from "./pages/billing/Billing.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Address from "./pages/address/Address.jsx";
import Payment from "./pages/payment/Payment.jsx";
import Active from "./pages/active/Active.jsx";
import Paused from "./pages/paused/Paused.jsx";
import Cancelled from "./pages/cancelled/Cancelled.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import Premium from "./pages/premium/Premium.jsx";
import Contact from "./pages/contact/Contact.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/allergy" element={<Allergy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/active" element={<Active />} />
        <Route path="/paused" element={<Paused />} />
        <Route path="/cancelled" element={<Cancelled />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
