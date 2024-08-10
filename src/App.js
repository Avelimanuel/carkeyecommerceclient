import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { Auth } from "./pages/auth";
import { Checkout } from "./pages/checkout";
import { Keycovers } from "./pages/keycovers";
import { Shop } from "./pages/shop";
import { ShopContextProvider } from "./context/shop-context";
import { Transactions } from "./pages/transactions";
import Footer from "./sections/Footer";
import Services from "./pages/services";


function App() {
  return (
    <div className="App">
      <Router>
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/authentication" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/keycovers" element={<Keycovers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/services" element={<Services/>} />

          </Routes>
          <Footer/>
        </ShopContextProvider>
      </Router>
    </div>
  );
}

export default App;
