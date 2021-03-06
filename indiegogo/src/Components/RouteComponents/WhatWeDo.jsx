import React from "react";
import styled from "styled-components";

const HeadImg = styled.div`
  position: relative;

  & img {
    height: 400px;
    margin-top: -8px;
  }

  & div {
    position: absolute;
    top: 20%;
    left: 29%;
  }
`;

const ExploreProjectsBtn = styled.div`
  border: 2px solid #e51075;
  color: #e51075;
  font-size: 20px;
  width: 200px;
  padding: 5px;
  margin: 10px auto;

  :hover {
    background-color: #e51075;
    color: white;
  }
`;

const CampaignGrid = styled.div`
  margin: 50px auto;
  height: 900px;
  margin-left: 5%;
  padding: 20px 5px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 600px 600px;
  grid-template:
    "left1 right"
    "left2 right";

  #left1 {
    grid-area: left1;
  }

  #left2 {
    grid-area: left2;
  }

  #right {
    grid-area: right;
    background-color: #d7f4ea;
    width: 600px;
    margin-right: -305px;

    & img {
      margin-top: 78px;
      margin-left: -200px;
      transform: rotate(60deg);
    }
  }
`;

const favCardTop = [
  {
    id: 1,
    imgSrc:
      "https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/c_scale,h_135/what_we_do/misfit.png",
    head: "Misfit Shine",
    count: "7,957 Backers",
    content:
      "With super-smart fitness technology squeezed into a sleek, take-it-anywhere design, the Misfit Shine was a huge hit. Today it’s available in stores everywhere, but Indiegogo backers were in on the action first. ",
  },
  {
    id: 2,
    imgSrc:
      "https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/c_scale,h_135/what_we_do/bluesmart.png",
    head: "Bluesmart",
    count: "10,984 Backers ",
    content:
      "This smash-hit campaign almost singlehandedly invented the smart suitcase as the must-have travel accessory that it is today. With innovative features like location tracking and a built-in scale, Bluesmart went big on Indiegogo before landing in stores around the world. ",
  },
];

const favCardBottom = [
  {
    id: 3,
    imgSrc:
      "https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/c_scale,h_135/what_we_do/evapolar.png",
    head: "Evapolar",
    count: "6,616 Backers ",
    content:
      "The Evapolar team’s slick air conditioner is small enough to place exactly where you need it most. It even cleans and humidifies as it cools. The campaign was so successful that the team came back to Indiegogo to launch the next-gen version. ",
  },
  {
    id: 4,
    imgSrc:
      "https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/c_scale,h_135/what_we_do/super_troopers.png",
    head: "Super Troopers 2",
    count: "54,531 Backers ",
    content:
      "With its truly gigantic backer community, Super Troopers 2 became one of the most iconic Indiegogo film projects. The team behind the project offered backers everything from movie tickets to an actual police car from the film! ",
  },
];

const FavCampaignComponent = ({ imgSrc, head, count, content }) => {
  return (
    <div style={{ width: "45%", margin: "5px" }}>
      <img src={imgSrc} alt="favCampaignImg" height="80px" />
      <h3>{head}</h3>
      <p>{count}</p>
      <br />
      <div style={{ width: "300px", margin: "auto" }}>{content}</div>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <>
      <HeadImg>
        <img
          src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/v1/what_we_do/hero_desktop.png"
          alt="whatWeDoTopImg"
        />
        <div>
          <h1 style={{ fontSize: "45px" }}>
            Get the tech that gets people talking
          </h1>
          <p style={{ fontSize: "25px" }}>
            With both live crowdfunding campaigns and innovative products
            shipping now, there’s <br /> no better place to start the hunt for
            cool and clever innovations that surprise and
            <br /> delight. Indiegogo is where new launches.
          </p>
        </div>
      </HeadImg>
      <br />
      <div>
        {/* Video Section */}
        <iframe
          title="Why Indiegogo"
          width="650"
          height="370"
          src="https://www.youtube.com/embed/2Tz_C14M6z0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      {/* Fund Section */}
      <div>
        <h1>Fund the next big thing</h1>{" "}
        <p style={{ fontSize: "20px" }}>
          Indiegogo's crowdfunding campaigns are where new and groundbreaking
          products take flight, sometimes
          <br /> long before they hit mainstream availability. With thousands of
          campaigns launching every week, there's
          <br /> great tech, design, and much more around every corner — often
          with limited-time perks and pricing for the
          <br /> earliest backers. Before it's everywhere, it's on Indiegogo.
        </p>
      </div>
      <br />
      <hr style={{ border: "1px solid lightgrey" }} />
      <br />

      {/* Join Journey Section */}
      <div>
        <h1>Join the journey from idea to market</h1>
        <img
          src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/v1/what_we_do/timeline_desktop_2x.png"
          alt="WhatWeDo_JourneyChainImg"
          width="400px"
        />
        <p style={{ fontSize: "20px" }}>
          With Indiegogo, you have the opportunity to support entrepreneurs and
          new technology from the earliest
          <br /> stages of development. Be sure to evaluate every campaign
          closely and contribute at a level you can afford in <br />
          the event that the team is unable to complete the project as planned.{" "}
        </p>
        <br />
        <p style={{ fontSize: "20px" }}>
          Browse campaigns, read the stories from the entrepreneurs themselves,
          evaluate the stage of development
          <br /> and any potential production risks — and then fund the projects
          that you want to help succeed.
        </p>
        <ExploreProjectsBtn>EXPLORE PROJECTS</ExploreProjectsBtn>
        <p style={{ fontSize: "20px" }}>
          Or learn more about crowdfunding and your role as a backer.
        </p>
      </div>
      <br />
      <br />
      <br />

      {/* Delivery Daily Section */}
      <div style={{ backgroundColor: "#f5f5f5", padding: "150px auto" }}>
        <h1>Great finds, delivered daily</h1>
        <p style={{ fontSize: "20px" }}>
          We surface the best and brightest of Indiegogo in our newsletter. Sign
          up to find out about great technology,
          <br /> design, film, and much more — all before it hits the
          mainstream.
        </p>
        <div>
          <input
            placeholder="Your Email Address"
            style={{
              padding: "8px",
              width: "300px",
              margin: "8px",
              border: "1px solid lightgrey",
            }}
          />
          <button
            style={{
              padding: "8px",
              backgroundColor: "#e51075",
              border: "none",
              color: "white",
              fontWeight: "600",
            }}
          >
            SUBSCRIBE
          </button>
        </div>
        <div>
          <input
            type="checkbox"
            style={{ marginLeft: "-9%", marginRight: "-8%" }}
          />
          <span style={{ fontSize: "12px" }}>
            I agree to the Terms of Use and have read and understand the Privacy
            Policy
          </span>
        </div>
      </div>

      {/* Campaign Section */}
      <CampaignGrid>
        <div id="left1">
          <h2>Just a few of our favorite campaigns </h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {favCardTop.map((item) => (
              <FavCampaignComponent
                key={item.id}
                imgSrc={item.imgSrc}
                head={item.head}
                count={item.count}
                content={item.content}
              />
            ))}
          </div>
        </div>
        <div id="left2">
          <hr style={{ border: "1px solid lightgrey", width: "85%" }} />
          <div style={{ display: "flex", flexDirection: "row" }}>
            {favCardBottom.map((item) => (
              <FavCampaignComponent
                key={item.id}
                imgSrc={item.imgSrc}
                head={item.head}
                count={item.count}
                content={item.content}
              />
            ))}
          </div>
        </div>
        <div id="right">
          <img
            src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_scale,h_740/v1/what_we_do/funding_hero_desktop_foreground.png"
            alt="bicycleImg"
          />
        </div>
      </CampaignGrid>
      <br />

      {/* Bottom last Card Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: "10px",
          margin: "50px 15%",
        }}
      >
        <div>
          <img src="/WhatWeDo/motorcycle.png" alt="motorcycleImg" />
          <h1 style={{ fontSize: "40px" }}>Ready?Explore</h1>
          <ExploreProjectsBtn>DISCOVER PROJECTS</ExploreProjectsBtn>
        </div>
        <div style={{ border: "1px solid lightgrey", height: "auto" }} />
        <div>
          <img src="/WhatWeDo/spark.png" alt="sparkImg" />
          <h1 style={{ fontSize: "40px" }}>Feeling Inspired? </h1>
          <ExploreProjectsBtn>
            <span>BECOME A ENTREPRENEUR</span>
          </ExploreProjectsBtn>
        </div>
        <br />
      </div>
    </>
  );
};

export { WhatWeDo };
