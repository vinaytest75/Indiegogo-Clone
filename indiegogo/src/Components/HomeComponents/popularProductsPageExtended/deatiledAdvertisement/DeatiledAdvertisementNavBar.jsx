import React from "react"

import {NavLink} from "react-router-dom"

const links = [
    {
        to: "/story",
        title: "Story"
    },
    {
        to : "/faq",
        title: "FAQs"
    }
]

const DeatiledAdvertisementNavBar = () => {
    return (
        links.map( (item, index) => {
            return <NavLink style = {{padding:"10px", fontSize: "20px", fontFamily: "Segoe UI", margin: "10px",textDecoration:"none",color:"black"}} 
            activeStyle = {{textDecoration: "underline"}}  to = {`/popularPage${item.to}`} key  = {item.index} >{item.title}</NavLink>
        })
    )
}

export default DeatiledAdvertisementNavBar