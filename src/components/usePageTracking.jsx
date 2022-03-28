import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

function initialiseAnalytics() {
  ReactGA.initialize("G-8P7BDLG0B0");
}

export default function usePageTracking() {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    initialiseAnalytics();
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }
  }, [initialized, location]);
}
