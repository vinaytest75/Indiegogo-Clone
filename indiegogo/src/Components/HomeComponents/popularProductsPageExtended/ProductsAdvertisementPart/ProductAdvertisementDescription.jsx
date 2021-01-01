import React from "react"
import Styles from "./ProductAdvertisementDescription.module.css"
import {Button} from  "react-bootstrap"
const ProductAdvertisementDescription = () => {
    return (
        <>
            <div className = {Styles.descriptionDiv} >

                {/* product name , type and  description is below */}

                <p>FUNDING</p>
                <h1>Edeskhub: The Best Smart Desk for Healthy Working.</h1>
                <p className = {Styles.description} >700mm Adjustable Height | Wireless Charging | 100W Power Delivery Hub | Relax While at Work</p>
                
                {/*name of location, address and logo */}

                <div>
                    <div className = {Styles.imgDiv}>
                        <img className = {Styles.imgEle} src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_40,g_center,q_auto:best,dpr_1.0,f_auto,h_40/x20jujq3qrrp3miwttfh" alt = "imgnd" />
                    </div>
                    <div className = {Styles.placeDiv}>
                        <p className = {Styles.headname}>Edeskhubs</p>
                        <p className = {Styles.location} >1 Campaign | Los Angeles, United States</p>
                    </div>
                </div>

                {/* product cost and availability details */}

                <div style = {{clear: "both",paddingTop: "15px", backgroundColor: "white"}}>
                    <div className= {Styles.floatLeft}>
                        <p className= {Styles.price}>₹34,678,352 </p>
                    </div>
                    
                    <div style = {{width: "350px"}} className= {Styles.floatLeft} >
                        <p className= {Styles.curency}>INR</p>
                        <p className= {Styles.floatRight}>2,328 backers</p>
                    </div>
                    <div className  = {Styles.horizontalbar} ></div>
                    <div className= {Styles.floatLeft}>
                        <p className= {Styles.pricePercentage}>9496% of ₹365,177 </p>
                    </div>
                    
                    <div style = {{width: "300px"}} className= {Styles.floatLeft} >
                        <p className= {Styles.flexibalGoal}>Flexible Goal</p>
                        <p className= {Styles.daysLeft}>13 days left</p>
                    </div>
                </div>

                {/* buttons and social media icons with respective links */}

                <div className = {Styles.clearBoth}>
                    <div className = {Styles.floatLeft} > 
                    <Button className = {Styles.shareButton}>BACK IT</Button>
                        <Button className = {Styles.loveButton}> <img className = {Styles.iconTwitter} src="https://w1.pngwing.com/pngs/777/933/png-transparent-chart-icon-favorites-icon-favourite-icon-heart-icon-rating-icon-top-icon-love-symbol.png" /> FOLLOW</Button>
                    </div>
                    <div className = {Styles.floatRight}>
                        <img className = {Styles.icons} src="https://www.flaticon.com/svg/static/icons/svg/1384/1384053.svg" alt="fbIcon" />
                        <img className = {Styles.icons} src="https://www.flaticon.com/svg/static/icons/svg/1051/1051382.svg" alt="twitterIcon" />
                        <img className = {Styles.icons} src="https://cdn4.iconfinder.com/data/icons/web-links/512/41-512.png" alt="linkIcon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductAdvertisementDescription