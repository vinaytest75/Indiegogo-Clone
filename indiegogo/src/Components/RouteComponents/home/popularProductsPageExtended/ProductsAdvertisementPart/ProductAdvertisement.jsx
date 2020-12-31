import React from "react"
import ProductsAdvertisementCarousal from "./ProductsAdvertisementCarousal"
import ProductAdvertisementDescription from "./ProductAdvertisementDescription"

const ProductAdvertisement = () => {
    return (
        <>
            <div style = {{borderBottom : "1px solid cyan", float: "left"}}>
                <div style = {{float: "left"}} >
                    <ProductsAdvertisementCarousal />
                </div>
                <div style = {{float: "left"}}>
                    <ProductAdvertisementDescription />
                </div>
            </div>
        </>
    )
}

export default ProductAdvertisement