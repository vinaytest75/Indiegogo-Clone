import React from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"; 
import data from "../../../../data.json"
import Styles from "./SelectPertSection.module.css"
const SelectPertSection = () => {
    return (
        <div>
            <h6>Select a perk</h6>
            <div>
                {data.select_pert_data.map(item => {
                    return (

                        <Card key = {item.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.avatar} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Title>{item.presnt_global_cost} <span className = {Styles.spanClass} style = {{textDecoration: "line-through"}}>{item.actual_cost}</span><span className = {Styles.spanClass}>{item.offer_percentage}</span></Card.Title>
                                <div>
                                    <svg className = {Styles.svgStyle} viewBox="0 0 17 17" id="v-currency_conversion"><path d="M15.89 10l.27.753.228.652.539 1.526a.747.747 0 01.01.621.722.722 0 01-.459.407l-.111.032a.714.714 0 01-.449-.056.738.738 0 01-.377-.424l-.209-.58c-1.521 2.69-4.407 4.26-7.441 4.05-3.034-.21-5.687-2.163-6.84-5.037a.72.72 0 01.385-.931.695.695 0 01.911.392c.944 2.347 3.105 3.948 5.582 4.136 2.478.187 4.846-1.071 6.118-3.251l-.658.244a.723.723 0 01-.567-.027.748.748 0 01-.38-.43l-.027-.099a.767.767 0 01.466-.869l1.624-.59L15.89 10zM8.912 4v.675a3.6 3.6 0 01.97.146c.324.1.623.285.874.54l-.854 1.204a1.293 1.293 0 00-.485-.315 2.58 2.58 0 00-.592-.158V7.78l.854.292c.374.109.712.344.97.676.24.334.364.758.35 1.192.006.329-.05.655-.165.956-.11.272-.27.514-.466.709a2.21 2.21 0 01-.69.45 2.913 2.913 0 01-.824.214V13h-.66v-.776a3.808 3.808 0 01-1.165-.18A2.361 2.361 0 016 11.39l.97-1.226c.161.217.369.38.602.473.223.091.454.148.69.168V9.063l-.65-.237a2.24 2.24 0 01-1.03-.686 1.994 1.994 0 01-.349-1.238 2.115 2.115 0 01.175-.877c.108-.257.26-.487.446-.675.194-.191.414-.343.65-.45.243-.114.498-.19.758-.225V4h.65zm-.058 5.276v1.474l.272-.011a.932.932 0 00.242-.147.934.934 0 00.175-.225.633.633 0 00.068-.303.794.794 0 00-.049-.281.642.642 0 00-.136-.192.964.964 0 00-.184-.135l-.223-.101-.165-.079zM8.31 6.092a1.3 1.3 0 00-.446.214.627.627 0 00-.194.495.681.681 0 00.087.371c.046.084.11.154.184.203.048.06.103.109.165.146.07.008.139.027.204.057zM1.591 4.13A7.977 7.977 0 019.05.014a7.99 7.99 0 016.918 4.979.713.713 0 01-.46.893l-.103.021a.698.698 0 01-.735-.432 6.582 6.582 0 00-5.643-4.103 6.57 6.57 0 00-6.147 3.29l.689-.281a.735.735 0 01.998.421l.041.115a.746.746 0 01-.45.889l-1.607.642L1.182 7l-.55-1.385L.065 4.18a.756.756 0 01.409-1.003l.11-.035a.725.725 0 01.838.446z" fill-rule="evenodd"></path></svg>
                                        {/* <img src="" alt ="perk image"/> */}
                                    <p style = {{color: "#949494"}} >{item.cost_in_india} </p>
                                </div>
                            </Card.Body>
                            <ListGroup style = {{border: "none", lineHeight: "0.8"}} className="list-group-flush">
                                <ListGroupItem style = {{border: "none"}}>
                                    <p className = {Styles.estimated_shipping}>Estimated Shipping</p>
                                    <div>{item.estimated_shipping }</div>
                                </ListGroupItem>
                                <ListGroupItem style = {{border: "none"}}>{ item.availability_by_product }</ListGroupItem>
                                <ListGroupItem style = {{border: "none"}}>{ item.availability_by_location }</ListGroupItem>
                            </ListGroup>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}


export default SelectPertSection