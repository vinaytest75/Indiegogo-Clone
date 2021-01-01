import React from "react"
import ProductAdvertisement from  "./ProductsAdvertisementPart/ProductAdvertisement"
import DeatiledAdvertisementNavBar from "./deatiledAdvertisement/DeatiledAdvertisementNavBar"
import SelectPertSection from "./selectPertSection/SelectPertSection"
import Story from "./deatiledAdvertisement/deatiledAdvertisementComponents/Story"
const PopularProductsPage = (props) => {
    return (
        <>
            <ProductAdvertisement />
            <div style = {{clear:"both"}}></div>
        </>
    )
}


export default PopularProductsPage