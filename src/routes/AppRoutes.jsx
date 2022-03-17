import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <div className="flex flex-col justify-start overflow-x-hidden min-h-screen gradient">
          <div className="flex-grow flex flex-col pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default AppRoutes;
