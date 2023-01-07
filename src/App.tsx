import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import Topnavbar from "./common/topnavbar";
import Navbar from "./common/navbar";
import Spinner from "./common/spinner";
import Footer from "./common/footer";
import Copyright from "./common/copyright";

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
