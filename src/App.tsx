import { Outlet, Route, Routes } from "react-router-dom";

import Topnavbar from "./common/topnavbar";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import Copyright from "./common/copyright";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLoginForm from "./pages/AdminLoginForm";
import Blog from "./pages/Blog";
import Blogpage from "./pages/Blogpage";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Servicepage from "./pages/Servicepage";
import Services from "./pages/Services";
import Solutionpage from "./pages/Solutionpage";
import Solutions from "./pages/Solutions";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
        <Routes>
        <Route element={<><Topnavbar/><Navbar/><Outlet/><Footer/><Copyright/></>}>
          <Route path="" element={<Home />}/>
          <Route path="hakkimizda" element={<About />} />
          <Route path="iletisim" element={<Contact/>} />
          <Route path="*" element={<NotFound />} /> 
          <Route path="hizmetler" element={<Services />} />
          <Route path="cozumler" element={<Solutions />} />
          <Route path="hizmetler/:id" element={<Servicepage />} />
          <Route path="cozumler/:id" element={<Solutionpage />} />
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