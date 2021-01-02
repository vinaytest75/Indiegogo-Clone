import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Radio } from "antd";
import { SearchInput } from "./SearchBar";
import ProjectCard from "./ProjectCard";
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
const RightSection = styled.div`
  height: 60%;
  width: 19%;
  margin-left: 1.6%;
  // border:1px solid blue;
  float: left;
  padding: 1%;
  line-height: 3;
  display: flex;
  text-align: left;
  flex-direction: column;
  padding-right: 1%;
`;
const LeftSection = styled.div`
  height: 60%;
  width: 76%;
  // border:1px solid green;
  float: left;
  padding: 1%;
`;
const SortSection = styled.div`
  float: right;
  // border:1px solid pink;
  height: 50px;
  width: 200px;
`;
const ShowMoreButton = styled.div`
  padding: 0.5%;

  width: 130px;
  margin: auto;
  text-align: center;
  color: white;
  font-weight: 600;
  background-color: #e51075;
`;
const ProjectBox = styled.div`
  height: 1200px;
  width: 95%;
  margin: auto;
  // border:1px solid black;
`;
class ExploreProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByPrice: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
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
        <br></br>
        {/* <hr></hr> */}
        <RightSection>
          <strong>Filter results</strong>
          <div>CATEGORY</div>
          <div>All Categories </div>
          <select style={{ padding: "1.5%", border: "none" }}>
            <option>Tech & Innovation</option>
            <option>Audio</option>
            <option>Camera Gear</option>
            <option>Education</option>
            <option>Energy & Green Tech</option>
            <option>Fashion & Wearables</option>
            <option>Food & Beverages</option>
          </select>

          <select style={{ padding: "1.5%", border: "none" }}>
            <option>Creative Works</option>
            <option> Art</option>
            <option>Comics</option>
            <option>Dance & Theater</option>
            <option>Film</option>
            <option>Music</option>
            <option>Photography</option>
          </select>
          <select style={{ padding: "1.5%", border: "none" }}>
            <option>Community Projects</option>
            <option>Culture</option>
            <option>Human Rights</option>
            <option>Environment</option>
            <option>Wellness</option>
          </select>
          <div
            style={{
              height: "1px",
              width: "210px",
              background: "grey",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          ></div>
          <div>Project Timing</div>
          <div>
            <Radio.Group>
              <Radio checked={true} value={1}>
                All
              </Radio>
              <br />
              <br></br>
              <Radio value={2}>
                Launching<br></br>{" "}
                <span style={{ marginLeft: "23px" }}>Soon</span>
              </Radio>
              <br></br>
              <br></br>
              <Radio value={3}>
                Just<br></br>{" "}
                <span style={{ marginLeft: "23px" }}>Launched</span>
              </Radio>
              <br></br>
              <br></br>
              <Radio value={4}>
                Ending <br></br>
                <span style={{ marginLeft: "23px" }}>Soon</span>
              </Radio>
            </Radio.Group>
          </div>
        </RightSection>
        <LeftSection>
          <input
            placeholder="Search for Campaigns"
            style={{ width: "560px", margin: "auto" }}
          />
          <hr></hr>
          <SortSection>
            <div>
              Sort By
              <select
                style={{ padding: "1.5%", marginLeft: "15px" }}
                onChange={this.handleChange}
                name="sortByPrice"
              >
                <option value="desc">Trending</option>
                <option value="asc">Most Funded</option>
              </select>
            </div>
          </SortSection>
          <br></br>
          <br></br>
          <br></br>

          <ProjectBox>
            <ProjectCard sortValue={this.state.sortByPrice} />
          </ProjectBox>
          <br></br>
          <ShowMoreButton>SHOW MORE</ShowMoreButton>
        </LeftSection>
        <div style={{ clear: "both" }}></div>
      </>
    );
  }
}
export { ExploreProducts };
