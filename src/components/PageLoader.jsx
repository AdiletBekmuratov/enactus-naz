import React from "react";
import { FaUtensils } from "react-icons/fa";

const PageLoader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-box">
        <div className="icon">
          <FaUtensils />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
