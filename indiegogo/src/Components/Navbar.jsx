import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "antd";
import "antd/dist/antd.css";
import LoginPopUpModal from "./RouteComponents/LoginPopUpModal";
import SignUp from "./RouteComponents/SignUpModal/SignUp";
import { NavbarUser } from "./NavbarComponents/NavbarUser";
import { UserModal } from "./NavbarComponents/UserModal";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { AppContext, AuthContext } from "../Context/AppContextProvider";

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

    & :hover {
      color: #e51075;
    }
  }
`;

const Button = styled.button`
  background-color: white;
  border: none;

  & :hover {
    color: #e51075;
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

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisibleLogin: false,
      modalVisibleSignUp: false,
      modalVisibleUser: false,
      showSearchBar: false,
    };
  }

  setModalVisibleLogin(modalVisibleLogin) {
    this.setState({ modalVisibleLogin });
  }

  setModalVisibleSignUp(modalVisibleSignUp) {
    this.setState({ modalVisibleSignUp });
  }

  setModalVisibleUser(modalVisibleUser) {
    this.setState({ modalVisibleUser });
  }

  handleShowSearchBar = () => {
    this.setState({
      showSearchBar: !this.state.showSearchBar,
    });
  };

  changeTextColor(e) {
    e.target.style.color = "#e51075";
  }

  reverseTextColor(e) {
    e.target.style.color = "black";
  }

  render() {
    const { showSearchBar } = this.state;
    const { isAuth } = this.context;
    return (
      <>
        {showSearchBar ? (
          <div style={{ marginTop: "4px" }}>
            <SearchOutlined style={{ fontSize: "20px" }} />
            <input
              placeholder="Search"
              style={{ border: "none", width: "90%", margin: "0px 15px" }}
            />
            <CloseOutlined onClick={this.handleShowSearchBar} />
          </div>
        ) : (
          <NavbarStyle>
            <div>
              <NavLink to="/">
                <img
                  src="/HomePage/IndiegogoLogo.png"
                  alt="IndiegogoLogo"
                  height="20px"
                />
              </NavLink>
              {leftLinks.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.to}
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "black",
                  }}
                  activeStyle={{ color: "black" }}
                  onMouseEnter={this.changeTextColor}
                  onMouseOut={this.reverseTextColor}
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
                  onClick={this.handleShowSearchBar}
                />
              </NavLink>
            </div>
            <div>
              {rightLinks.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.to}
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "black",
                  }}
                  activeStyle={{ color: "black" }}
                  onMouseEnter={this.changeTextColor}
                  onMouseOut={this.reverseTextColor}
                >
                  {item.title}
                </NavLink>
              ))}
              <span
                style={{
                  border: "1px solid lightgrey",
                  width: "0px",
                }}
              />
              {isAuth ? (
                <span onClick={() => this.setModalVisibleUser(true)}>
                  <NavbarUser />
                </span>
              ) : (
                <>
                  <Button onClick={() => this.setModalVisibleLogin(true)}>
                    Login
                  </Button>
                  <Button onClick={() => this.setModalVisibleSignUp(true)}>
                    Sign Up
                  </Button>
                </>
              )}

              {/* User Modal*/}
              <Modal
                width={170}
                closable={false}
                visible={this.state.modalVisibleUser}
                onOk={() => this.setModalVisibleUser(false)}
                onCancel={() => this.setModalVisibleUser(false)}
                footer={null}
                style={{ float: "right", margin: "-40px 0px" }}
              >
                <UserModal />
              </Modal>

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
        )}
      </>
    );
  }
}

Navbar.contextType = AppContext;
export { Navbar };
