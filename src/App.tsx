import { Suspense } from "react";
import Spinner from "./components/spinner";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Suspense fallback={<Spinner/>}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
