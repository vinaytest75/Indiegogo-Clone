import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Styles from  "./ProductsAdvertisementCarousal.module.css"
class ProductsAdvertisementCarousal extends React.Component {
    render() {
        return (
            <>
                
                <div className = {Styles.carousalDiv} >
                    <Carousel >
                        <div style = {{background: "white"}}>
                        <iframe class="videoWrapper" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="695" height="460" src="https://www.youtube.com/embed/7t1arIC0sC4?playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.indiegogo.com&amp;widgetid=1" id="widget2" tabindex="-1"></iframe>
                        </div>
                        <div>
                            <img src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/alzip7izdf9ayyagdkl3" alt= "imaged2" />                           
                        </div>
                        <div>
                            <img src="https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/svca3cczurd3h4hqlion" alt = "image3" />      
                        </div>
                        <div>
                            <img src="https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/cz0fmalapdfaqfmjhws7" alt= "img4" />
                        </div>
                        <div>
                            <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/x7rawbxrbaervqwnp0lu" alt = "img4" ></img>
                        </div>
                        <div>
                            <img src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/xevf22jau7coombwo7mb" alt = "img4" ></img>
                        </div>
                        <div>
                            <img src="https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/kxm36waghfl66fukezrf" alt = "img6" ></img>
                        </div>
                        <div>
                            <img src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/bgj3vaez26loykgttztx" alt = "img7" ></img>
                        </div>
                    </Carousel>
                </div>
            </>
        )
    }
    
}


export default ProductsAdvertisementCarousal