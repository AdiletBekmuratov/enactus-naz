import React from "react";
import { FaUtensils } from "react-icons/fa";

const PageLoaderMenu = () => {
  return (
    <div className="loader-wrapper">
			<h3 className="text-white">Меню загружается</h3>
      <div className="loader-box">
        <div className="icon">
          <FaUtensils />
        </div>
      </div>
    </div>
  );
};

export default PageLoaderMenu;
