import React from "react"

const ProjectCard  = () => {
    return (
        <div>
            <div class="card" style={{width: "18rem"}}>
                <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/twssjiianvaytwckmwuu" class="card-img-top" alt="..." />
                <div  className="card-body">
                    <h5 className="card-title">Niche Zero: the best conical burr coffie grinder</h5>
                    <p className="card-text">the only way to become a true home barista and make the best testing coffie. every time.</p>

                </div>
                {/* categories */}
                <p style = {{ fontSize: "14px" ,padding :"4px 6px 0px 20px"}}>FOOD AND BEVERAGES</p>
                <div style = {{padding :"1px 0px 0px 20px", float: "left"}}>
                    <div style = {{float: "left"}}><h4>$2,182,861<span style = {{padding :"1px 6px 0px 2px", fontSize:"14px"}}>USD raised</span></h4>
                    {/* percentag */}
                    </div>
                    <div style = {{paddingTop :4, float: "right"}} > 4,040% </div>
                    
                </div>
                <div style = {{padding :"4px 6px 0px 20px", clear: "both"}} >Now funding through <span style = {{fontSize: "12px"}}>InDEMAND</span></div>
            </div>
        </div>
    )
}

export default ProjectCard