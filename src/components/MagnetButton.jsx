import React, { useRef } from "react";

const MagnetButton = (props) => {
  const compRef = useRef();

  const handleMouseMove = (e) => {
    e.preventDefault();
    const position = compRef.current.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;

    compRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
  };

  const handleMouseOut = (e) => {
    e.preventDefault();
    compRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div
      className="magnet"
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      ref={compRef}
    >
      {props.children}
    </div>
  );
};

export default MagnetButton;
