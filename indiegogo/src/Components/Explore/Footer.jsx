import React from "react";
import styled from "styled-components";

const FooterBody = styled.div`
  height: 230px;
  width: 100%;
  background-color: #f5f5f5;
`;

const Header = styled.div`
  display: flex;
  width: 80%;
  //border:1px solid blue;
  margin: auto;
  text-align: left;
  justify-content: space-around;
`;
const SubHeader = styled.div`
  margin-top: 15px;
  margin-left: -180px;
  text-align: left;
  font-weight: 600;
  font-family: benton-sans, Helvetica, "Sans-serif";

  line-height: 1.5;
`;
const OptionBox = styled.div`
  display: flex;
  width: 80%;
  //border:1px solid green;
  margin: auto;
  text-align: left;
`;
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  margin-right: 25px;
  &div {
    margin-left: -110px;
  }
`;

function Footer(props) {
  return (
    <div>
      <FooterBody>
        <Header>
          <SubHeader>TECH & INNOVATIONS</SubHeader>
          <SubHeader>CREATIVE WORK</SubHeader>
          <SubHeader>COMMUNITY PROJECTS</SubHeader>
        </Header>
        <OptionBox>
          <InnerBox>
            <div>Audio</div>
            <div>Camera Gear</div>
            <div>Education</div>
            <div>Energy & Green Tech</div>
            <div>Fashion & Wearables</div>
            <div>Food & Beverages</div>
          </InnerBox>
          <InnerBox>
            <div>Health & Fitness</div>
            <div>Home </div>
            <div>Phones & Accessories</div>
            <div>Productivity</div>
            <div>Transportation</div>
            <div>Travel & Outdoors</div>
          </InnerBox>

          <InnerBox style={{ marginLeft: "60px" }}>
            <div> Art</div>
            <div>Comics </div>
            <div>Dance & Theater</div>
            <div>Film</div>
            <div>Music</div>
            <div>Photography</div>
          </InnerBox>

          <InnerBox>
            <div> Podcasts, Blogs & Vlogs</div>
            <div>Tabletop Games</div>
            <div>Video Games</div>

            <div>Web Series & TV Shows</div>
            <div>Writing & Publishing</div>
          </InnerBox>

          <InnerBox style={{ marginLeft: "20px" }}>
            <div> Culture</div>
            <div>Environment</div>
            <div>Human Rights</div>
            <div>Film</div>
            <div>Local Businesses</div>
            <div>Wellness</div>
          </InnerBox>
        </OptionBox>
      </FooterBody>
    </div>
  );
}

export default Footer;
