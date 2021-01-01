import React from "react";

const Categories = () => {
  return (
    <div>
      <p style={{ fontSize: "30px" }}>Which categories interest you? </p>
      <p style={{ fontSize: "16px" }}>
        Discover projects just for you and get great recommendations when you
        select your interests.{" "}
      </p>
      <button style={{ border: "1px solid lightgrey", width: "12%", padding: "5px" }}>
        SIGN UP AND SELECT INTERESTS
      </button>
      <p style={{ fontSize: "16px" }}>Or explore our top categories </p>
      <img src="./HomePage/categoriesImg.png" alt="categoriesImg" />
    </div>
  );
};

export { Categories };
