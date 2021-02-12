import Recat from "react"
import Styles from "./Story.module.css"
import SelectPertSection from "../../selectPertSection/SelectPertSection"
const Story = () => {
    return (

        <div>
            <div style = {{float: "left"}}>
                <div>
                    <div style = {{float: "left"}}>
                        <div className= {Styles.page }>
                            <div className = {Styles.writtenImagesDiv}>
                                <img className = {Styles.imgsStyling} 
                                    src= "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1603441470/mk6maaqunmmjfedk6hmv.png" 
                                    alt = "img1"
                                />

                                <img className = {Styles.imgsStyling}  
                                    src = "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1607501865/gcwmc7pl3kf59dw4w5dn.png" 
                                    alt ="img2" 
                                />

                                <p className = {Styles.writeUpPart} >
                                    <span className = {Styles.spanData} >
                                        Edeskhub,
                                    </span> 
                                    is a smart desk that perfectly matches your height and fits in anywhere.
                                </p>
                                
                                <p className = {Styles.writeUpPart} >
                                    Make your workstation more comfortable and find a healthy balance between sitting and standing all day. 
                                    You'll find yourself getting more done and feeling better with easily adjustable ergonomic positions 
                                    for your computer desk.
                                </p>

                                <img className = {Styles.imgsStyling} 
                                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1603851209/sgs4rf41xffjiwtsj0ss.png" 
                                    alt ="imgs" 
                                />
                                <p className = {Styles.writeUpPart} > 
                                    Surveys show that we may spend an average of 19 hours sitting or lying down. That’s 19 of the 24 hours in a 
                                    day! Prolonged sitting is extremely unhealthy, having an adverse effect on our circulatory system, 
                                    blood vessels, and nervous system. Unfortunately, most of us spend the majority of our time awake sitting; 
                                    we sit at work, in the car, and at home in front of a TV or computer screen. Essentially, we go from sitting 
                                    in one place to sitting in another.
                                </p>

                                <img className = {Styles.imgsStyling} 
                                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1606979890/x27my8lvmdeqvx725wia.png" 
                                    alt ="imgs" 
                                />
                            

                                <img className = {Styles.imgsStyling} 
                                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1603851250/gbuj4a5o9vzm858xltaf.png" 
                                    alt ="imgs" 
                                    />

                                <p className = {Styles.writeUpPart} > According to a report by the World Health Organization, the harm of a sedentary lifestyle is second 
                                    only to smoking. Working, driving, and doing homework will require sitting throughout the day. 
                                    Sitting for a long time not only hurts the spine but also can leave you easily getting dizzy. 
                                    With Edeskhub, we recommend a 
                                    <span className = {Styles.spanData} > one-hour working method: sit for 45min, then stand for 15min. </span>  
                                    Using this alternating routine can not only reduce spinal pressure but also improve 
                                    work efficiency.
                                </p>

                                <img className = {Styles.imgsStyling} 
                                    src="https://cdn.shopifycdn.net/s/files/1/0435/4395/3566/files/1_884c1a49-fd6a-4ba9-b5a3-b24968ba5682.gif?v=1605668206" 
                                    alt= "imgs" 
                                />

                                <img className = {Styles.imgsStyling} 
                                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1606137408/iqsaxiuxkcnbzaiidngw.png" 
                                    alt= "imgs" 
                                />

                                <img className = {Styles.imgsStyling} 
                                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1603851332/yfj1wxixl7gm8burklcu.png" 
                                    alt= "imgs" 
                                    />

                                <p className = {Styles.writeUpPart} >
                                    Should you only use Edeskhub in the office? No! It is a versatile desk and fits in anywhere, including 
                                    your living room, dining room, bedroom, or even the kitchen. A good partner for the home office, it provides 
                                    you with a comfortable and productive way of working and relieves neck and back pain.
                                </p>

                        
                                <img className = {Styles.imgsStyling} 
                                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1607418357/euv0qpgsw2rzir8meouf.png" 
                                    alt= "imgs" 
                                />

                                <img className = {Styles.imgsStyling} 
                                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1607418372/px7zslotsco6wy05vcpb.png" 
                                    alt= "imgs" 
                                />

                                <img className = {Styles.imgsStyling} 
                                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1607418388/basc8v1t1xo0cfnxvaub.png" 
                                    alt= "imgs" 
                                />

                            {/* <img className = {Styles.imgsStyling} src="" alt= "imgs" /> */}
                            </div>
                        </div>
                    </div>
                    <div style = {{float: "right"}}>
                        <SelectPertSection />
                    </div>
                    <div style = {{clear:"both"}}></div>
                </div>
            </div>
            <div style = {{float: "right"}}>
                <SelectPertSection />
            </div>
            <div style = {{clear:"both"}}></div>
        </div>

        
    )
}

export default Story