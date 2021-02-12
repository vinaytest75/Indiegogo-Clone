import React from "react"
import Styles from "./Faq.module.css"
import SelectPertSection from "../../selectPertSection/SelectPertSection"

const Faq = () => {
    return (

        <div>
            <div style = {{float: "left"}}>

            </div>
            <div style = {{float: "right"}}>
                <SelectPertSection />
            </div>
            <div style = {{clear:"both"}}></div>
        </div>
        <div className = {Styles.page}>
            <p className = {Styles.questionsHeading}>Frequently Asked Questions</p>
            <div className = {Styles.questionDiv}>
                <p className = {Styles.question}>Whether the table legs have rollers?</p>
                <p className = {Styles.answer}>No, the table legs without rollers.</p>
            </div>
            <div className = {Styles.questionDiv}>
                <p className = {Styles.question}>Do you provide installation service?</p>
                <p className = {Styles.answer}>We will provide a guiding video later.</p>
            </div>
            <div className = {Styles.questionDiv}>
                <p className = {Styles.question}>Whether the table is environmentally friendly material？</p>
                <p className = {Styles.answer}>Yes, we use durable solid rubberwood.</p>
            </div>
            <div className = {Styles.questionDiv}>
                <p className = {Styles.question}>Will there be an app?</p>
                <p className = {Styles.answer}>No</p>
            </div>
            <div className = {Styles.questionDiv}>
                <p className = {Styles.question}>What is the warranty period of the motor？</p>
                <p className = {Styles.answer}>2 years</p>
            </div>
            {/* special question part will begin here on */}
            <div className = {Styles.specialQuestionDivs} >
                <p className = {Styles.questionsHeading}>First time on Indiegogo?</p>
                <div className = {Styles.spaecialdivs}>
                    <p className = {Styles.question}>What is Indiegogo and how does crowdfunding work?</p>
                    <p className = {Styles.answer}>Indiegogo is a platform to fund ingenious, work-in-progress 
                        products and ideas. Although contributing to a campaign is not the same as purchasing a 
                        product, when you support a crowdfunding project, you help bring ideas to life! 
                        <span className = {Styles.spanElement}> learn more</span>
                    </p>
                </div>
                <div className = {Styles.spaecialdivs}>
                    <p className = {Styles.question}>How do I select a perk that interests me on this page?</p>
                    <p className = {Styles.answer}>On desktop, you’ll see a list with all available perks on the 
                        right hand side of the page. Click on the perk you want, then click the "Get This Perk" button 
                        to be redirected to the payment page. If you're on a mobile device, scroll up to see all 
                        available perks.
                    </p>
                </div>
                <div className = {Styles.spaecialdivs}>
                    <p className = {Styles.question}>How do I ask the project owner a question?</p>
                    <p className = {Styles.answer}>If you’ve already backed this campaign, you can 
                        leave a comment on the Comments tab, or send the project owner a direct message. 
                        Otherwise, you may be able to contact the project owner through their website or 
                        social media accounts. 
                        <span className = {Styles.spanElement}> Learn more.</span>
                    </p>
                </div>

            </div>
            {/* other special section starts */}

            <div className = {Styles.specialQuestionDivs} >
                <p className = {Styles.questionsHeading}>Already contributed to this project?</p>
                <div className = {Styles.spaecialdivs}>
                    <p className = {Styles.question}>Can I change the shipping address for my perk?</p>
                    <p className = {Styles.answer}>In most cases, yes. <span className = {Styles.spanElement}> Here’s how to do it. </span>  However, if the 
                        project has already started to ship perks, or if you need to change your country, 
                        you’ll need to <span className = {Styles.spanElement}> contact the project owner </span> in order to request any changes.
                    </p>
                </div>
                <div className = {Styles.spaecialdivs}>
                    <p className = {Styles.question}>Can I change the item, or perk, I selected?</p>
                    <p className = {Styles.answer}>You’ll need to <span className = {Styles.spanElement}> contact the project owner directly </span> to request any 
                        change to perks, like color or quantity.
                    </p>
                </div>
                <div className = {Styles.spaecialdivs}>
                    <p className = {Styles.question}>Can I ask Indiegogo for a refund?</p>
                    <p className = {Styles.answer}>Indiegogo does not guarantee that the perks offered by the campaigner will be produced or delivered and is not directly responsible for refunding contributions.
                        <span className = {Styles.spanElement}> Learn more </span>  about our Refund policy.
                    </p>
                </div>

            </div>
        </div>

    )
}


export default Faq