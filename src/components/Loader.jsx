import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <ContentLoader
    speed={1.5}
    backgroundColor="#ffffff9d"
    foregroundColor="#d3d3d342"
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width={props.width} height={props.height} />
  </ContentLoader>
);

export default Loader;
