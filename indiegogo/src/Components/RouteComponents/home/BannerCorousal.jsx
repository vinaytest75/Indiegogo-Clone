import React from "react"
import {Carousel,Item,Caption} from "react-bootstrap"

class BannerCorousal extends React.Component{
    constructor(props){
        super(props)
        this.state = {} 
    }

    render() {
        return (
            <>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608750043/ebnhzzgy0s4bjckiicok.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                        <img style = {{width: "1550px", objectFit: "contain"}}
                        className="d-block w-100"
                        src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608748918/i4znoxv6wmueauzeemks.png"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608658306/sq99rrhy9cl65o0z6kva.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608749866/x64zyvkgbpphl462hiet.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608750043/ebnhzzgy0s4bjckiicok.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}

export default BannerCorousal