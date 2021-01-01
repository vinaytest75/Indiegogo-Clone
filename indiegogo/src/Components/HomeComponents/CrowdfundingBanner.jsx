import React from "react";
import styled from "styled-components";
// import { RightOutlined } from "@ant-design/icons";

const BannerStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 13%;
  width: auto;
`;

const CrowdfundingBanner = () => {
  return (
    <BannerStyle>
      <img src="./HomePage/crowdLeft.png" alt="crowdLeftImg" />
      <div style={{ margin: "30px 50px" }}>
        <p style={{ fontSize: "35px", margin: "30px" }}>
          Back the project, take the ride
        </p>
        <p style={{ fontSize: "18px", margin: "20px 30px", textAlign: "left" }}>
          Indiegogo is your destination for clever innovations in tech, design,
          and more, often with special perks and pricing for early adopters.
          Back a campaign, share your ideas and feedback with the project team -
          and join the risks and rewards of bringing new products to life.
        </p>
        <p style={{ fontSize: "18px" }}>
          LEARN ABOUT CROWDFUNDING
        </p>
      </div>
      <img src="./HomePage/crowdRight.png" alt="crowdRightImg" />
    </BannerStyle>
  );
};

export { CrowdfundingBanner };
