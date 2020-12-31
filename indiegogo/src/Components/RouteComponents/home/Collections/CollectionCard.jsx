import React from "react"
import {Card, Button} from "react-bootstrap"
import data from "../../../data.json"
import Styles from "./CollectionCard.module.css"
const CollectionCard = () => {
    return (
        <div className = {Styles.cards}>
            {data.collectionsPageData.map ( item => {
                return <Card style={{ width: "100%" , height: "600px"}}>
                            <Card.Img variant="top" src={item.avatar} />
                            <Card.Body>
                                <div style= {{borderBottom : "1px solid cyan"}}>
                                    <p className = {Styles.itemType}>{item.type}</p>
                                </div>
                                <div className = {Styles.lineHeight}>
                                    <p className = { Styles.itemName }  >{item.name}</p>
                                    <p className = {Styles.description}>{item.description}</p>
                                </div>
                                
                                
                            </Card.Body>
                            <Card.Footer style = {{backgroundColor: "white", border: "0px solid white"}} >
                                <div style = {{paddingTop: "15px", backgroundColor: "white"}}>
                                        <div className= {Styles.floatLeft}>
                                            <p className= {Styles.price}>{item.price}</p>
                                        </div>
                                        
                                        <div style = {{width: "450px"}} className= {Styles.floatLeft} >
                                            <p className= {Styles.curency}>{item.currency}</p>
                                            <p className= {Styles.floatRight}>{item.percentage}</p>
                                        </div>
                                        <div className  = {Styles.horizontalbar} ></div>
                                </div>
                            </Card.Footer>
                        </Card>
            })}
            
            
        </div>
        
    )
}

export default CollectionCard