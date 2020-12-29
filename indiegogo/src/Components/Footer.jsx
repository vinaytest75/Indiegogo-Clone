import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  background: #f5f5f5;
  height: 400px;
  width: 100%;
  position: absolute;
  bottom: 100;
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

const Footer = () => {
  return (
    <FooterStyle>
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
            Discover new and clever products in <br /> the Indiegogo newsletter
          </div>
          <br />
          <input
            placeholder="Your email address"
            style={{ padding: "12px", width: "200px" }}
          />
          <br />
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginTop: "10px" }}>
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
    </FooterStyle>
  );
};

export { Footer };
