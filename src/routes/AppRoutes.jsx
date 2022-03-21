import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Post from "@/pages/Post";
import Posts from "@/pages/Posts";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollToTop>
        <Header />
        <div className="flex flex-col justify-start overflow-x-hidden min-h-screen bg-gray-50">
          <div className="flex-grow flex flex-col pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:slug" element={<Post />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default AppRoutes;
