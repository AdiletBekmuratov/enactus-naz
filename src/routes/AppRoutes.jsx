import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageLoader from "@/components/PageLoader";
import ScrollToTop from "@/components/ScrollToTop";
import PDF from "@/pages/PDF";
import Plan from "@/pages/Plan";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const About = lazy(() => import("@/pages/About"));
const Home = lazy(() => import("@/pages/Home"));
const Post = lazy(() => import("@/pages/Post"));
const Posts = lazy(() => import("@/pages/Posts"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <ScrollToTop>
          <Toaster position="top-right" reverseOrder={false} />
          <Header />
          <div className="flex flex-col justify-start overflow-x-hidden min-h-screen bg-gray-50">
            <div className="flex-grow flex flex-col pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:slug" element={<Post />} />
                <Route path="/pdf" element={<PDF />} />
                <Route path="/plan" element={<Plan />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
