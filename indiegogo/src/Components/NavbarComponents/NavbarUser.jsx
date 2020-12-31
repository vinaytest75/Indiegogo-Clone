import React from "react";

const style = {
  borderRadius: "50%",
  height: "30px",
  width: "30px",
  marginRight: "9px",
};

const NavbarUser = () => {
  return (
    <>
      <span>
        <img
          src="https://avatars2.githubusercontent.com/u/62155169?s=400&u=7447c7b4463e4ffbfa476c0e44c6e53c2a30f5dc&v=4"
          alt="profileImg"
          style={{ ...style }}
        />
        Vinay
      </span>
    </>
  );
};

export { NavbarUser };
