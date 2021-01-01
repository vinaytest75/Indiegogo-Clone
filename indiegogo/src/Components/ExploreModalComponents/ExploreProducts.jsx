import React from "react";
import styled from "styled-components";

const HeadBanner = styled.div`
  position: relative;
  //   height: 200px;

  & div {
    position: absolute;
    top: 20px;
    left: 30%;

    & h1 {
      font-size: 50px;
      color: white;
    }
    & h3 {
      font-size: 25px;
      color: white;
    }
  }
`;

class ExploreProducts extends React.Component {
  render() {
    return (
      <>
        {/* Head Banner */}
        <HeadBanner>
          <img
            src="https://g1.iggcdn.com/assets/explore/desktop/campaign-d867fa38edb5ad270cd80df5816b0268df9e3bfa622a136e4fa9969c71156649.jpg"
            alt="exploreProdTopImg"
            width="100%"
          />
          <div>
            <h1>Indiegogo Campaigns</h1>
            <h3>
              Fund new and groundbreaking projects, including hits from
              Indiegogo InDemand
            </h3>
          </div>
        </HeadBanner>

        <div style={{ display: "flex", flex: "1 5", marginLeft: "20%" }}>
          {/* Left Filters */}
          <div>
            <div>
              <strong>Filter results</strong>
            </div>
            <div>CATEGORY</div>
            <div>All Categories</div>
            <div>Tech & Innovation</div>
            <div>Creative Works</div>
            <div>Community Projects</div>
            <br />
            <hr style={{ border: "1px solid lightgrey" }} />
            <br />
            <div>PROJECT TIMING</div>
            <div>All</div>
            <div>Launching soon</div>
            <div>Just launched</div>
            <div>Ending soon</div>
          </div>

          {/* Right Categories */}
          <div>
            <input
              placeholder="Search for Campaigns"
              style={{ width: "500px" }}
            />
            <div style={{ clear: "right" }}>
              <label>
                Sort by
                <select>
                  <option>Trending</option>
                  <option>Most Funded</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { ExploreProducts };
