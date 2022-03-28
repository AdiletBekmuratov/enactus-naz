import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import usePageTracking from "./usePageTracking";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
	usePageTracking()

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

export default ScrollToTop;
