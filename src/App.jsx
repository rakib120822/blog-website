import { Routes, Route } from "react-router";
import Home from "./component/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Blogs from "./component/Blogs";
import About from "./component/About";
import BlogPage from "./component/blogPage/BlogPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/showblog" element={<BlogPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
