import React, { useState } from "react";
import image from "./../asset/sky.jpg";
const Image = () => {
  const [filter, setFilter] = useState(null);
  return (
    <div className="image">
      <img src={image} />
    </div>
  );
};

export default Image;
