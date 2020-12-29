import React from "react";
import styled from "styled-components";

const CampaignStyle = styled.div`
  font-size: 20px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 25px;
  }
`;

const CampaignCard = styled.div`
  border: 1px solid lightgrey;
  margin: 10px;
  font-weight: 300;
  width: 400px;
  height: 225px;
  align-text: center;
  padding: 40px 32px;

  :hover {
    box-shadow: 1px 8px 10px grey;
    -webkit-transition: box-shadow 0.1s ease-in;
  }
`;

const Campaign = () => {
  return (
    <CampaignStyle>
      <br />
      <br />
      <div>
        <img src="/HomePage/CampaignTopImg.png" alt="CampaignTopImg" />
      </div>
      <h1> Welcome to Indiegogo</h1>
      <div>What are you crowdfunding for? </div>
      <div>
        <CampaignCard>
          <h2>A project</h2>
          <div>
            Indiegogo is crowdfunding platform helping <br /> entrepreneurial
            ideas come to life.
          </div>
          <br />
          <div style={{ color: "grey" }}>5% platform fee</div>
          <br />
          <div>
            <img src="/HomePage/IndiegogoLogo.png" alt="IndiegogoLogo" />
          </div>
        </CampaignCard>
        <CampaignCard>
          <h2>A cause</h2>
          <div>
            GoFundMe is the world's largest and most trust free <br /> social
            fundraising platform.
          </div>
          <br />
          <div style={{ color: "grey" }}>0% platform fee</div>
          <br />
          <div>
            <img src="/CampaignPage/gofundme.png.png" alt="IndiegogoLogo" />
          </div>
        </CampaignCard>
      </div>
      <div style={{ color: "lightgrey" }}>
        All Indiegogo projects must provide banking information, a
        government-issued ID, location, and tax information. This information is
        used to prevent fraud, comply with the law, and disburse project funds.{" "}
      </div>
    </CampaignStyle>
  );
};

export { Campaign };
