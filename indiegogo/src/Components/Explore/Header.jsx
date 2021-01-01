import React from 'react';
import styled from "styled-components"


const Wrapper = styled.div`
display:flex;
// border:1px solid black;
height:120px;
width:80%;
margin:auto;
justify-content:space-around;
`
const HeadImg = styled.div`
  position: relative;
  & img {
     
    height: 80px;
    margin-top:8px;

  }
  & div {
    position: absolute;
    top: 20%;
    left: 29%;
  }
`;
const ImgBox = styled.div`
// border:1px solid red;
height:100px;
width:15%;
margin:auto;`

function Header(props) {
    return (
        <div>
            <Wrapper>
            <HeadImg>
                <h3>Explore All Projects</h3>
        <img
          src="https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/v1/homepage/dropdown_banner_2x.png"
          alt="whatWeDoTopImg"
        />
        <div>
         
          <p style={{ fontSize: "18px",marginTop:"20px",fontWeight:600 }}>
        
         Clever Things For 
         <br></br>
         Curious Humans
          </p>
        </div>
      </HeadImg>
                <ImgBox>
                <h3>Our Top 10 Finds</h3>
                <img height= "80px" width= "130px" src = "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/i7hau016biywxymvvd9f" />
                </ImgBox>
                <ImgBox >
                <h3>Team Favourites</h3>
               <img height= "80px"width= "130px" src = "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_2.0,f_auto/hm3rj6fp1q04yos5vebc"/>
                </ImgBox>
                <ImgBox>
                <h3>InDemand Stars</h3>
                <img height= "80px"  width= "130px" src = "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_2.0,f_auto/qireauyaysqvhb3mabqg"/>
                </ImgBox>
                <ImgBox>
                <h3>Join the Convo</h3>
                <img height= "80px"  width= "130px" src = "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_2.0,f_auto/qzkirsdhkn3c6yukvo27"/>
                </ImgBox>

            </Wrapper>
            
        </div>
    );
}

export default Header;