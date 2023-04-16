import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Basket from "./pages/Basket/Basket";
import Contact from "./pages/Contact/Contact";
import Delivery from "./pages/Delivery/Delivery";
import Registration from "./pages/Registration/Registration";
import Reviews from "./pages/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
