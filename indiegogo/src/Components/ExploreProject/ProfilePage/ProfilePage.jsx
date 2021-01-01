import React from 'react';
import styled from "styled-components"
import EyeIcon from "../../../Images/EyeIcon.PNG"
import Edit from "../../../Images/EditIcon.PNG"
import ProfileInfo from "../../../Images/ProfileInfo.PNG"

const BlackBar = styled.div`
height:53px;
width:100%;
background-color:black;
color:white;
padding-top:1%;
padding-left:2%;
text-align:left;`
const NameHeader = styled.div`
font-size:27px;
width:100%;
font-weight:700;
color:black;
padding-top:4%;
padding-left:3%;
text-align:left;`


function ProfilePage(props) {
    return (
        <div>
            {/* import NavBar */}
            <br></br>
            <BlackBar>
           <img src = {EyeIcon} height = "35px"/>
           View Profile
           <img src = {Edit} style = {{marginTop:"-3px", marginLeft:"24px"}}/>
           </BlackBar>
           <NameHeader>Vinay</NameHeader>
           <br></br>
           <img src = {ProfileInfo} />
            <br></br>
            {/* import Footer */}
        </div>
    );
}

export default ProfilePage;