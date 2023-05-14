import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Basket from "./pages/Basket/Basket";
import Contact from "./pages/Contact/Contact";
import Delivery from "./pages/Delivery/Delivery";
import Registration from "./pages/Registration/Registration";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar/Navbar";
import ReviewPage from "./pages/Review";


function App() {
  return (
    <div className="App w-screen">
      
      <div className="">
      <div className="fixed top-0 z-10">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
