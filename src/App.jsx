import { Routes, Route } from "react-router";
import Home from "./component/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "./component/About";
import Blogs from "./component/blogpage/Blogs";
import BlogShowPage from "./component/blogsShow/BlogShowPage";
import ResourcePage from "./component/resource/ResourcePage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogPage/:id" element={<BlogShowPage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}
      
export default App;
