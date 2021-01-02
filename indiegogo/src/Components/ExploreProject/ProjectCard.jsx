import React from "react";
import data from "../../ExploreProject.json";
import styled from "styled-components";
import {
  HeartOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

const Card = styled.div`
  :hover {
    box-shadow: 1px 8px 10px grey;
    -webkit-transition: box-shadow 0.1s ease-in;
  }
`;
const GridDisplay = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
`;

class ProjectCard extends React.Component {
  render() {
    const { sortValue } = this.props;
    return (
      <GridDisplay>
        {data.popular_projects
          ?.sort((a, b) => {
            if (sortValue === null) {
              return 0;
            }
            if (sortValue === "asc") {
              return a.price - b.price;
            } else if (sortValue === "desc") {
              return b.price - a.price;
            }
          })
          .map((item, index) => {
            return (
              <Card
                key={index}
                className="m-2 border"
                style={{ width: "275px", height: "580px" }}
              >
                <div style={{ minHeight: "auto" }}>
                  <img
                    src={item.avatar}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div style={{ height: "100px" }} className="card-body">
                    <div>
                      <span
                        style={{
                          color: "#268366",
                          textAlign: "left,",
                          marginLeft: "-140px",
                        }}
                      >
                        FUNDING
                      </span>
                      <span style={{ float: "right" }}>
                        <HeartOutlined
                          style={{
                            fontSize: "20px",
                            color: "lightgrey",
                            marginBottom: "5px",
                          }}
                        />
                      </span>
                    </div>

                    <h5 style={{ fontSize: "17px" }} className="card-title">
                      {item.name}
                    </h5>
                    <p style={{ fontSize: "12px" }} className="card-text">
                      {item.description}
                    </p>
                  </div>
                </div>
                <br />
                {/* categories */}
                <div
                  className=" text-muted p-1"
                  style={{ position: "relative", top: "20px" }}
                >
                  <p style={{ fontSize: "13px", padding: "4px 6px 0px 20px" }}>
                    {item.category}
                  </p>
                  <div style={{ padding: "1px 0px 0px 20px" }}>
                    <div style={{ float: "left" }}>
                      <h4>
                        ${item.price}
                        <span
                          style={{
                            padding: "1px 6px 0px 2px",
                            fontSize: "13px",
                          }}
                        >
                          {item.currency}
                        </span>
                      </h4>
                      {/* percentag */}
                    </div>
                    <div style={{ paddingTop: 4, float: "right" }}>
                      {item.percentage}
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "230px",
                      clear: "both",
                      border: "4px solid #34ca96",
                      borderRadius: "4px",
                    }}
                  />
                  <div style={{ padding: "4px 6px 0px 20px", clear: "both" }}>
                    {item.no_of_days_left}
                    <span style={{ fontSize: "12px", float: "right" }}>
                      InDEMAND
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
      </GridDisplay>
    );
  }
}
//  console.log(data.popular_projects)

export default ProjectCard;
