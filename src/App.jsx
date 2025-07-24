import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddProduct from "./AddProduct";
import AddSeller from "./AddSeller";
import ConsumerHistory from "./ConsumerHistory";
import ConsumerHome from "./ConsumerHome";
import Login from "./Login";
import Register from "./Register";
import Manufacturer from "./Manufacturer";
import QuerySeller from "./QuerySeller";
import Seller from "./Seller";
import SellProductManufacturer from "./SellProductManufacturer";
import SellProductSeller from "./SellProductSeller";
import VerifyProduct from "./VerifyProduct";
import Queryproduct from "./Queryproduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-seller" element={<AddSeller />} />
        <Route path="/consumer-history" element={<ConsumerHistory />} />
        <Route path="/consumer" element={<ConsumerHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/manufacturer" element={<Manufacturer />} />
        <Route path="/query-seller" element={<QuerySeller />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/sell-product-seller" element={<SellProductManufacturer />} />
        <Route path="/sell" element={<SellProductSeller />} />
        <Route path="/verify-product" element={<VerifyProduct />} />
        <Route path="/products" element={<Queryproduct />} />

      </Routes>
    </Router>
  );
};

export default App;
