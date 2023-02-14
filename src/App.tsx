import { Outlet, Route, Routes } from "react-router-dom";

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
import AdminLoginForm from "./pages/AdminLoginForm";
import AdminDashboard from "./pages/AdminDashboard";
import Solutions from "./pages/Solutions";
import Blogpage from "./pages/Blogpage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<><Topnavbar/><Navbar/><Outlet/><Footer/><Copyright/></>}>
          <Route path="/" element={<Home />} />
          <Route path="hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact/>} />
          <Route path="*" element={<NotFound />} /> 
          <Route path="hizmetler" element={<Services />} />
          <Route path="cozumler" element={<Solutions />} />
          <Route path="urunler" element={<Products />} />
          <Route path="urunler/:id" element={<Product />} />  
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Blogpage />} />
          <Route path="sss" element={<FAQ />} />
        </Route>
        <Route path="admin/login" element={<AdminLoginForm />} />
        <Route path="admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
