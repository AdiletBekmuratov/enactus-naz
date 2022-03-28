import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location.pathname]);

  return children;
};

export default ScrollToTop;
