import { Suspense } from "react";
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
import Spinner from "./common/spinner";
import Footer from "./common/footer";
import Copyright from "./common/copyright";

function App() {
  return (
    <Suspense fallback={<Spinner/>}>
      {/* <Topnavbar/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact/>} />
        <Route path="*" element={<NotFound />} /> 
        <Route path="hizmetler" element={<Services />} />
        <Route path="urunler" element={<Products />} />
        <Route path="blog" element={<Blog />} />
        {/* 
        <Route path="admin" element={<Admin />} />
        */}
      </Routes>
      <Footer/>
      <Copyright/>
    </Suspense>
  );
}

export default App;
