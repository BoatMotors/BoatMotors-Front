import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Basket from "./pages/Basket/Basket";
import Contact from "./pages/Contact/Contact";
import Delivery from "./pages/Delivery/Delivery";
import Registration from "./pages/Registration/Registration";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App w-screen">
      
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
