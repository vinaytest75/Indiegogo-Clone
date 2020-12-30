import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "antd";
import "antd/dist/antd.css";
import LoginPopUpModal from "./RouteComponents/LoginPopUpModal";
import SignUp from "./RouteComponents/SignUpModal/SignUp";

const NavbarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  & > * > * {
    font-weight: 600;
    margin: 0px 5px;
    font-size: 17px;
    text-decoration: none;
    color: black;
  }
`;

const Button = styled.button`
  background-color: white;
  border: none;
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

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisibleLogin: false,
      modalVisibleSignUp: false,
    };
  }

  setModalVisibleLogin(modalVisibleLogin) {
    this.setState({ modalVisibleLogin });
  }

  setModalVisibleSignUp(modalVisibleSignUp) {
    this.setState({ modalVisibleSignUp });
  }

  render() {
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
          <Button onClick={() => this.setModalVisibleLogin(true)}>Login</Button>
          <Button onClick={() => this.setModalVisibleSignUp(true)}>
            Sign Up
          </Button>
          
          {/* Login Button Modal*/}
          <Modal
            centered
            width={350}
            visible={this.state.modalVisibleLogin}
            onOk={() => this.setModalVisibleLogin(false)}
            onCancel={() => this.setModalVisibleLogin(false)}
            footer={null}
          >
            <LoginPopUpModal />
          </Modal>

          {/* Sign Up Button Modal*/}
          <Modal
            centered
            width={350}
            visible={this.state.modalVisibleSignUp}
            onOk={() => this.setModalVisibleSignUp(false)}
            onCancel={() => this.setModalVisibleSignUp(false)}
            footer={null}
          >
            <SignUp />
          </Modal>
        </div>
      </NavbarStyle>
    );
  }
}

export { Navbar };
