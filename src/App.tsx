import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Blog from "./pages/Blog";

import Topnavbar from "./common/topnavbar";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import Copyright from "./common/copyright";
import FAQ from "./pages/FAQ";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Topnavbar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact/>} />
        <Route path="*" element={<NotFound />} /> 
        <Route path="hizmetler" element={<Services />} />
        <Route path="urunler" element={<Products />} />
        <Route path="urunler/:id" element={<Product />} />  
        <Route path="blog" element={<Blog />} />
        <Route path="sss" element={<FAQ />} />
        {/* 
        <Route path="admin" element={<Admin />} />
        */}
      </Routes>
      <Footer/>
      <Copyright/>
    </>
  );
}

export default App;
