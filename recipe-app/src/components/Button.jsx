import React from "react";

const Button = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Search</button>
    </div>
  );
};

export default Button;
