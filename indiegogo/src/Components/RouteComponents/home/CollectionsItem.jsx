import React from "react"
import Styles from "./CollectionsItem.module.css"
import data from "../../data.json"

const CollectionsItem  =  (props) => {
    return (
        <div className = {Styles.collectionDiv}>
            {
                data.collectionsItemData.map(item => {
                    return (
                        <div key = {item.name} >
                            <div className = {Styles.imageDiv} style = {{background: `url(${item.avatar})`, backgroundRepeat: "no-repeat", backgroundSize: "contain"}}>
                                <p className = {Styles.headingData}>{item.heading}</p>
                            </div>
                            <div>
                                <h6 style = {{float: "left"}}>{item.description}</h6>
                                
                                <p style = {{float: "right"}}  className = {Styles.linkStyle}>SEE COLLECTION <img className = {Styles.iconSizing} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAABDQ0NBQUE+Pj5xcXF0dHR2dnb5+flubm5ISEj19fUsLCxycnItLS15eXkgICAfHx8mJiaqqqpPT0+hoaE5OTkZGRm6urrFxcVgYGCTk5OdnZ1nxqMKAAADZ0lEQVR4nO2di3LTQAxF11DA0BKgTVte//+dZCcdlyaOLdvK6OruPR/A5MyRpUwbmlJ8eNx1Tw9O/xYi/a6rfIl+HVejv+uOvI9+JVdiEGRV/E+w695Fv5or8Eaw626iX487J4J8Fc8E6SrenwlyVezHBJkqjowoV8WLgix38eWtGq/ipCDDoM4I5l83E88gR8XZgukrzhfMXdEworkrmkY0c0VzwUrGu7igYE7FhYL5BnWxYLZ1s0IwV8VVgqkqrhPMU3FlwTwVNwjmqLhJMIPiRsEEik8bBeEVHzcLor+B256wA6/47GEIXXHvYohc8aePIXLFr06KwBU/SJFA8TO/oldF4HXjVRH4o0VeG7WBinoWI1FFKaZQ1KCaaWDd6PRHomfRjCpG0sBdbEBRg2qmgXUDfPo/Oik2UBH4WWygYgNHw6uiFCPRoJoBXjc6/WYaqKhnMRJtVCmmUNSgmgFeNzr9ZlQxkgY2qpcicMVPTorAFRtQ1KCaAa7o9QZOFSNRRTPAFbVRzQBXbEBRg2oGuKKOhhlVjKSBitqoZoArNqDYwKB+c1JUxUhU0YwqRuJ1NPbRIpfxUgT+JganQQWOaPzToHM8R2tcxqkh7jqlfw7pd6nXPYT9GAP9b/hV0IgKRkH/YwwJZhekXzJeBWGXDP0nh1XQiApGoS0qQXBBjagR2CWjM2FEBaOgL6gtKkFwQY2oEdglozNhBLYg/R+PoP9fwPTPIP2ZoBfUiBqBXTI6E0ZUMAr6gtqiEgQX1IgagV0yOhNGVDAK+oL0W5T+ey3pvzaAfsl4FYT9Ynn6gl5LRgWj0DNohL4g7B2kF9SIGtGSiUKH3ghsQT2DRugLwt5BekH63038chKEXTLlt48gbMFS7l0EcQuWsvcQBC5YyoODIHLB4vFnc6ALHrj9sVEQ9g4ObFTEFzwoft8giD6iRzZUBF8yA/1axRwFKysHNUvByqpBzVOwsqJipoKVxYq5ClZul70Jz3AHT1lUMaPg4WjYK+Yb0SPmitmWzCu9TTFrwYpp3eQtWDFUzFywMlsxd8HKjGL2gpVJxZx38JQJRQ7BidPPMKJHLpz+/EvmldGjwVOwMvIsMhWsnD2LXAUrJxXZClbeKPIVrPR31AUrQ0VWwaEi54i+8GfX3fyNfhGj/AMkjkO3ri6mJQAAAABJRU5ErkJggg==" alt = "right arrow" /></p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        
    )
}

export default CollectionsItem