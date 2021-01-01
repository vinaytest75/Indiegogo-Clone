import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

const CarousalPage1 = styled.div`
  z-index: 1;
  position: relative;
  height: 400px;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608667675/m6guh5tq0v9ypc1vd2ej.jpg");
`;

const CarousalPage2 = styled.div`
  height: 400px;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608748919/tqyqpnl9vkx3zx1ddqnj.png");
`;

const CarousalPage3 = styled.div`
  height: 400px;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608658307/gchyvtpphekdl8zonr6h.jpg");
`;

const CarousalPage4 = styled.div`
  height: 400px;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608749867/thnmyeklefbnyekueggw.jpg");
`;

const CarousalPage5 = styled.div`
  height: 400px;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608750044/ogmigx3rbohk3dsjkalk.jpg");
`;

const ArrowKeys = styled.div`
  position: relative;
  color: white;
  & {
    position: absolute;
    top: 370px;
    left: 300px;
  }
`;

const ZCard = styled.div`
  z-index: 2;
  height: 270px;
  width: 450px;
  background: white;
  position: absolute;
  padding: 50px 35px;
  top: 130px;
  right: 0px;
  text-align: left;
`;

const Button = styled.button`
  background-color: #e51075;
  padding: 6px;
  color: white;
  border: none;
  width: 130px;
  margin: 12px 5px;
`;

class FeaturedCarousal extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }

  next() {
    this.carousel.next();
  }

  previous() {
    this.carousel.prev();
  }

  render() {
    return (
      <>
        <Carousel
          ref={(node) => (this.carousel = node)}
          style={{ marginTop: "-7px" }}
          effect="fade"
          dots={null}
          autoplay
        >
          {/* Carousal Page 1 */}
          <div>
            <CarousalPage1>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <span
                style={{
                  background: "#ffffff",
                  color: "grey",
                  fontSize: "14px",
                  padding: "4px",
                  margin: "19%",
                }}
              >
                GOGOPICKS
              </span>
              <br />
              <span
                style={{
                  margin: "19%",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Olive Pro: 2-in-1 Hearing Aids & Bluetooth Earbuds
              </span>
              <br />
              <span style={{ margin: "19%" }}>
                Enhanced Hearing for Sounds, Music and
              </span>
              <br />
              <span style={{ margin: "19%" }}>
                Conversations. Affordable Hearing for All.
              </span>
              <br />
              <span
                style={{
                  margin: "200px 19%",

                  fontWeight: "700",
                }}
              >
                SEE CAMPAIGN
              </span>
              <br />
              <br />
              <span style={{ fontSize: "18px", margin: "27%" }}>1 / 5</span>
            </CarousalPage1>
          </div>
          {/* Carousal Page 2 */}
          <div>
            <CarousalPage2>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <span
                style={{
                  background: "#ffffff",
                  color: "grey",
                  fontSize: "14px",
                  padding: "4px",
                  margin: "19%",
                }}
              >
                GOGOPICKS
              </span>
              <br />
              <span
                style={{
                  margin: "19%",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                inCharge X - The 100W Swiss Army Knife of Cables
              </span>
              <br />
              <span style={{ margin: "19%" }}>
                The most crowdfunded cable EVER is back! Tiny,
              </span>
              <br />
              <span style={{ margin: "19%" }}>
                Universal, Ultra Powerful keyring cable.
              </span>
              <br />
              <span
                style={{
                  margin: "200px 19%",

                  fontWeight: "700",
                }}
              >
                SEE CAMPAIGN
              </span>
              <br />
              <br />
              <span style={{ fontSize: "18px", margin: "27%" }}>2 / 5</span>
            </CarousalPage2>
          </div>
          {/* Carousal Page 3 */}
          <div>
            <CarousalPage3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <span
                style={{
                  background: "#ffffff",
                  color: "grey",
                  fontSize: "14px",
                  padding: "4px",
                  margin: "19%",
                }}
              >
                GOGOPICKS
              </span>
              <br />
              <span
                style={{
                  margin: "19%",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Aura Mate Pro - Best Premium Updated Scanner Yet
              </span>
              <br />
              <span style={{ margin: "19%" }}>
                Dual-Camera, Document Camera, Use With Zoom, 16
              </span>
              <br />
              <span style={{ margin: "19%" }}>
                MegaPixel, Curve-Flatten Tech, Scan A Book In 8 Mins
              </span>
              <br />
              <span
                style={{
                  margin: "200px 19%",

                  fontWeight: "700",
                }}
              >
                SEE CAMPAIGN
              </span>
              <br />
              <br />
              <span style={{ fontSize: "18px", margin: "27%" }}>3 / 5</span>
            </CarousalPage3>
          </div>
          {/* Carousal Page 4 */}
          <div>
            <CarousalPage4>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <span
                style={{
                  background: "#ffffff",
                  color: "grey",
                  fontSize: "14px",
                  padding: "4px",
                  margin: "19%",
                }}
              >
                GOGOPICKS
              </span>
              <br />
              <span
                style={{
                  margin: "19%",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                The Phantom Direct Drive Electric Skateboard
              </span>
              <br />
              <span style={{ margin: "19%" }}>
                30 MPH, 30 Mile Range. Next Gen 21700 Lithium
              </span>
              <br />
              <span style={{ margin: "19%" }}>
                Battery and Carbon Fiber Drop Deck You Can Count On.
              </span>
              <br />
              <span
                style={{
                  margin: "200px 19%",

                  fontWeight: "700",
                }}
              >
                SEE CAMPAIGN
              </span>
              <br />
              <br />
              <span style={{ fontSize: "18px", margin: "27%" }}>4 / 5</span>
            </CarousalPage4>
          </div>
          {/* Carousal Page 5 */}
          <div>
            <CarousalPage5>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <span
                style={{
                  background: "#ffffff",
                  color: "grey",
                  fontSize: "14px",
                  padding: "4px",
                  margin: "19%",
                }}
              >
                GOGOPICKS
              </span>
              <br />
              <span
                style={{
                  margin: "19%",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Flynova Pro:Boomerang spinner with endless tricks!
              </span>
              <br />
              <span style={{ margin: "19%" }}>
                Dynamic lights｜Safe for children｜Drop-
              </span>
              <br />
              <span style={{ margin: "19%" }}>
                resistant｜Tripled battery life
              </span>
              <br />
              <span
                style={{
                  margin: "200px 19%",

                  fontWeight: "700",
                }}
              >
                SEE CAMPAIGN
              </span>
              <br />
              <br />
              <span style={{ fontSize: "18px", margin: "27%" }}>5 / 5</span>
            </CarousalPage5>
          </div>
        </Carousel>
        <ArrowKeys>
          <LeftCircleOutlined
            style={{ fontSize: "35px", margin: "5px" }}
            type="left-circle"
            onClick={this.previous}
          />
          <RightCircleOutlined
            style={{ fontSize: "35px", margin: "5px" }}
            type="right-circle"
            onClick={this.next}
          />
        </ArrowKeys>

        {/* Carosal high z-index Card*/}
        <ZCard>
          <div style={{ fontSize: "35px" }}>Find it first on Indiegogo. </div>
          <div style={{ fontSize: "17px" }}>
            Indiegogo is where early adopters and innovation seekers find
            lively, imaginative tech before it hits the mainstream.{" "}
          </div>
          <div>
            <Button>SIGN UP NOW</Button>
            <Button
              style={{
                border: "1px solid #e51075",
                backgroundColor: "white",
                color: "#e51075",
              }}
            >
              LEARN MORE
            </Button>
          </div>
        </ZCard>
      </>
    );
  }
}

export { FeaturedCarousal };
