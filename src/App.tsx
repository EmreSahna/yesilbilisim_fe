import { Suspense } from "react";
import Spinner from "./components/spinner";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Topnavbar from "./components/topnavbar";
import Footer from "./components/footer";
import Copyright from "./components/copyright";

function App() {
  return (
    <Suspense fallback={<Spinner/>}>
      <Topnavbar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
      <Copyright/>
    </Suspense>
  );
}

export default App;
