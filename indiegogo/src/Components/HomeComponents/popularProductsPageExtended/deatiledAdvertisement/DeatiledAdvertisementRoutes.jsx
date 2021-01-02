import React from "react"
import DeatiledAdvertisementNavBar from "./DeatiledAdvertisementNavBar"
import {Route, Switch} from "react-router-dom"
import Story from "./deatiledAdvertisementComponents/Story"
import Faq from "./deatiledAdvertisementComponents/Faq"
const DeatiledAdvertisementRoutes = (props) => {
    const {match} = props
    console.log(props)
    console.log(match)
    return (
        <div>

            <DeatiledAdvertisementNavBar props = {props} />
        </div>
    )
}
export default DeatiledAdvertisementRoutes