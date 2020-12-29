import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  background: #f5f5f5;
  height: 600px;
  //     margin-top: 200px;
  //   postion: absolute;
  //   bottom: 0px;
  //   left: 0px;

  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
`;

const footer = {
  postion: "absolute",
  bottom: "0px",
  left: "0px",
};

const Footer = () => {
  return (
    <FooterStyle style={{ ...footer }}>
      FooterContent
      <div>Cont</div>
    </FooterStyle>
  );
};

export { Footer };
