import React from "react"
import  data from "../../data.json"
import Styles from "./ProjectCard.module.css"
const ProjectCard  = () => {
    console.log(data);
    return (
        <div className = {Styles.cardBody}>
            {data.popular_projects.map( (item,index) =>{
                return (     
                    <div key = {index} className={Styles.cardItems} style={{width: "275px"}}>
                        <div style = {{ minHeight: "300px" }}>
                            <img src={item.avatar} className="card-img-top" alt={item.name} />
                            <div style = {{height: "100px"}}  className="card-body">
                                <h5 style= {{fontSize: "17px"}} className="card-title">{item.name}</h5>
                                <p style= {{fontSize: "12px"}} className="card-text">{item.description}</p>
                            </div>
                        </div>
                        {/* categories */}
                        <div className="card-footer text-muted"   style = {{position:"relative", top:"20px"}} >
                            <p style = {{ fontSize: "13px" ,padding :"4px 6px 0px 20px"}}>{item.category}</p>
                            <div style = {{padding :"1px 0px 0px 20px", float: "left"}}>
                                <div style = {{float: "left"}}><h4>{item.price}<span style = {{padding :"1px 6px 0px 2px", fontSize:"13px"}}>{item.currency}</span></h4>
                                {/* percentag */}
                                </div>
                                <div style = {{paddingTop :4, float: "right"}} >{item.percentage}</div>
                                
                            </div>
                            <div style = {{padding :"4px 6px 0px 20px", clear: "both"}} > {item.no_of_days_left} <span style = {{fontSize: "12px"}}>InDEMAND</span></div>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default ProjectCard