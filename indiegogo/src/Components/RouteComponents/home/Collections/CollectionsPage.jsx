import React from "react"
import CollectionCard from "./CollectionCard"
import Styles from "./CollectionsPage.module.css"
import {Button} from "react-bootstrap"

const CollectionsPage = () => {
    return (
        <>

            <div>
                <div className = {Styles.dummyDiv} ></div>
                <div className = {Styles.heading} >10 Cool & Clever Finds</div>
                <div className = {Styles.description}>Discover your next "a-ha" moment in our roundup of standout projects, from live crowdfunding & InDemand campaigns to innovative products shipping now.</div>
                <div className = {Styles.buttonsDiv}>
                    <Button className = {Styles.shareButton}><img className = {Styles.icon} src="https://www.flaticon.com/svg/static/icons/svg/1384/1384053.svg" />  SHARE</Button>
                    <Button className = {Styles.shareButton}><img className = {Styles.iconTwitter} src="https://www.flaticon.com/svg/static/icons/svg/1051/1051382.svg" />  TWEET</Button>
                    <Button className = {Styles.loveButton}> <img className = {Styles.iconTwitter} src="https://w1.pngwing.com/pngs/777/933/png-transparent-chart-icon-favorites-icon-favourite-icon-heart-icon-rating-icon-top-icon-love-symbol.png" /> FOLLOW</Button>
                </div>
                
            </div>
            <CollectionCard />

        </>
    )
}

export default CollectionsPage