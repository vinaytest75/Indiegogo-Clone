import React from "react";

const Curious = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "50px 15%" }}>
      <div>
        <img
          src="./HomePage/CampaignTopImg.png"
          alt="campaignImg"
          height="170px"
        />
      </div>
      <div style={{ width: "700px" }}>
        <div style={{ fontSize: "30px" }}>
          Clever Things For Curious Humans™{" "}
        </div>
        <br />
        <div style={{ fontSize: "18px" }}>
          There’s no better place to start the hunt for something new and
          special. Begin on Indiegogo to find clever and unconventional things
          that solve everyday problems large and small.
        </div>
        <div>
          <button
            style={{
              color: "white",
              backgroundColor: "#e51075",
              border: "none",
              padding: "7px",
              width: "120px",
              fontWeight: "500",
              margin: "5px",
            }}
          >
            SIGN UP NOW
          </button>
          <button
            style={{
              border: "1px solid #e51075",
              color: "#e51075",
              backgroundColor: "white",
              padding: "7px",
              width: "120px",
              fontWeight: "500",
              margin: "5px",
            }}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export { Curious };
