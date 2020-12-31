import React from "react"
import {Card, Button} from "react-bootstrap"
import data from "../../../data.json"
import Styles from "./CollectionCard.module.css"
const CollectionCard = () => {
    return (
        <div className = {Styles.cards}>
            {data.popular_projects.map ( item => {
                return <Card style={{ width: "100%" , height: "600px"}}>
                            <Card.Img variant="top" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_310,w_590/e7gfbgzombi2reeeung9.jpg" />
                            <Card.Body>
                                <div style= {{borderBottom : "1px solid cyan"}}>
                                    <p className = {Styles.itemType}>{item.type}</p>
                                </div>
                                <p className = {Styles.itemName}  >{item.name}</p>
                                <p className = {Styles.description}>{item.description}</p>
                                <div>
                                    <p>{item.price}</p>
                                    <div >
                                        <p>{item.currency}</p>
                                        <p>{item.percentage}</p>
                                    </div>
                                </div>
                                <div className = {Styles.horizontalbar} ></div>
                            </Card.Body>
                        </Card>
            })}
            
            
        </div>
        
    )
}

export default CollectionCard