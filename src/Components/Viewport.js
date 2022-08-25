import React from "react";
import handleViewport from "react-in-viewport";

const ViewportBlock = ({ forwardedRef, inViewport, ...props }) => {
  const animation = inViewport
    ? "viewport in-viewport"
    : "viewport outside-viewport";

  return <div ref={forwardedRef} className={animation} {...props} />;
};

const Viewport = handleViewport(ViewportBlock);

export default Viewport;
