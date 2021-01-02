import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Modal } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeFilled,
  InstagramOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import { CurrencyModal } from "./FooterComponents/CurrencyModal";

const FooterStyle = styled.div`
  clear: both;
  background: #f5f5f5;
  height: auto;
  width: 100%;
  position: absolute;
  bottom: 50;
  left: 0;
  padding: 60px 10px;
`;

const FooterList = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0px 50px;
  font-size: 17px;
`;

const FooterCard = styled.div`
  margin-left: 100px;
`;

const BottomIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 20%;

  & div {
    margin: 7px;
  }
  & button {
    background: white;
    border: 1px solid lightgrey;
    width: 150px;
    margin-top: -8px;
    padding: 7px;
  }
`;

const currencies = [
  "UAE Dirham (AED)",
  " $ Australian Dollar (AUD)",
  "R$ Brazilian Real (BRL)",
  "$ Canadian Dollar (CAD)",
  "Fr  Swiss Franc (CHF)",
  "€ Euro (EUR)",
  "₹ Indian Rupee (INR)",
  "¥ Japanese Yen (JPY)",
  "$ US Dollar (USD)",
];

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisibleCurrency: false,
      currency: "₹ Indian Rupee (INR)",
    };
  }

  setModalVisibleCurrency(modalVisibleCurrency) {
    this.setState({ modalVisibleCurrency });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <FooterStyle>
        {/* -----Footer Top Section ------ */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <FooterList>
            <div style={{ color: "grey" }}>EXPLORE</div>
            <br />
            <div>What we do</div>
            <div>Funding</div>
            <div>GoFundMe</div>
          </FooterList>
          <FooterList>
            <div style={{ color: "grey" }}>ABOUT</div>
            <br />
            <div>About Us</div>
            <div>Blog</div>
            <div>Trust and Safety</div>
            <div>Help and Support</div>
            <div>Press</div>
            <div>Careers</div>
            <div>Contact</div>
          </FooterList>
          <FooterList>
            <div style={{ color: "grey" }}>ENTREPRENEURS</div>
            <br />
            <div>How it Works</div>
            <div>Indiegogo vs. Kickstarter</div>
            <div>Education Center</div>
            <div>Experts Directory</div>
            <div>Fees</div>
            <div>Enterprise</div>
            <div>China</div>
          </FooterList>
          <FooterCard>
            <div>
              <img src="/Footer/FooterMailImg.png" alt="FooterMailImg" />
            </div>
            <div>
              <strong> Find it first on Indiegogo</strong>
            </div>
            <div>
              Discover new and clever products in <br /> the Indiegogo
              newsletter
            </div>
            <br />
            <input
              placeholder="Your email address"
              style={{ padding: "12px", width: "200px" }}
            />
            <br />
            <br />
            <div
              style={{ display: "flex", flexDirection: "row", margin: "-9px" }}
            >
              <div style={{ margin: "15px -110px" }}>
                <input type="checkbox" />
              </div>
              <div style={{ textAlign: "left" }}>
                I agree to the Terms of Use and have
                <br /> read and understand the
                <br />
                Privacy Policy{" "}
              </div>
            </div>
            <br />
            <button
              style={{
                color: "white",
                backgroundColor: "#e51075",
                border: "none",
                padding: "12px",
                width: "200px",
              }}
            >
              SIGN ME UP
            </button>
          </FooterCard>
        </div>
        <br />
        {/* ---------Footer Bottom Section ---------- */}
        <BottomIcon>
          <div>
            <button onClick={() => this.setModalVisibleCurrency(true)}>
              {this.state.currency}
            </button>

            {/* Currency Modal */}
            <Modal
              centered
              width={600}
              visible={this.state.modalVisibleCurrency}
              onOk={() => this.setModalVisibleCurrency(false)}
              onCancel={() => this.setModalVisibleCurrency(false)}
            >
              <CurrencyModal
                currency={this.state.currency}
                currencies={currencies}
                handleChange={this.handleChange}
              />
            </Modal>
          </div>
          <div>
            <FacebookOutlined />
          </div>
          <div>
            <TwitterOutlined />
          </div>
          <div>
            <YoutubeFilled />
          </div>
          <div>
            <InstagramOutlined />
          </div>
          <div>
            <LinkedinFilled />
          </div>
        </BottomIcon>
        <hr style={{ color: "#dddddd", width: "60%" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "60%",
            justifyContent: "space-around",
            marginLeft: "20%",
          }}
        >
          <div>
            <img
              src="https://www.indiegogo.com/images/bbbImage.png"
              alt="footerImg"
              height="30px"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: "15px",
              marginLeft: "20%",
            }}
          >
            <div style={{ margin: "10px" }}>Terms of Use</div>
            <div style={{ margin: "10px" }}>Privacy Policy</div>
            <div style={{ margin: "10px" }}>Cookie Policy</div>
            <div style={{ margin: "10px" }}>
              Do Not Sell My Personal Information
            </div>
            <div style={{ margin: "10px" }}>
              © 2020 Indiegogo, Inc. All Rights Reserved
            </div>
          </div>
        </div>
      </FooterStyle>
    );
  }
}

export { Footer };
