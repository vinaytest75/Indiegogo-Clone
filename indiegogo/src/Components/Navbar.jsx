import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  & > * > * {
    font-weight: 600;
    margin: 0px 3px;
    font-size: 13px;
    text-decoration: none;
    color: black;
  }
`;

const leftLinks = [
  {
    to: "/explore",
    title: "Explore",
  },
  {
    to: "/whatwedo",
    title: "What We Do",
  },
];

const rightLinks = [
  {
    to: "/entrepreneurs",
    title: "For Entrepreneurs",
  },
  {
    to: "/campaign",
    title: "Start a Campaign",
  },
];

const Navbar = () => {
  return (
    <NavbarStyle>
      <div>
        <NavLink to="/">
          <img
            src="/HomePage/IndiegogoLogo.png"
            alt="IndiegogoLogo"
            height="20px"
          />
        </NavLink>
        {leftLinks.map((item) => (
          <NavLink
            to={item.to}
            style={{
              textDecoration: "none",
              padding: "10px",
              color: "black",
            }}
            activeStyle={{ color: "black" }}
          >
            {item.title}
          </NavLink>
        ))}
        <NavLink to="/search">
          <img
            src="/HomePage/search.png"
            alt="searchIcon"
            height="15px"
            width="15px"
          />
        </NavLink>
      </div>
      <div>
        {rightLinks.map((item) => (
          <NavLink
            to={item.to}
            style={{ textDecoration: "none", padding: "10px", color: "black" }}
            activeStyle={{ color: "black" }}
          >
            {item.title}
          </NavLink>
        ))}
        <NavLink
          to="/login"
          style={{ borderLeft: "1px solid grey", paddingLeft: "14px" }}
          activeStyle={{ color: "black" }}
        >
          Log In
        </NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </NavbarStyle>
  );
};

export { Navbar };
