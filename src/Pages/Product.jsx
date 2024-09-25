import { useContext } from "react"
import { useParams } from "react-router-dom"
import Breadcrum from "../Components/Breadcrums/Breadcrum"
import { shopContext } from "../Context/ShopContext"
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay"
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox"
import ProductSection from "../Components/ProductSection/ProductSection"
import data_product from "../Components/Assets/data"

const Product = () => {
  const {all_products} = useContext(shopContext)
  const {productId} = useParams();

  const product = all_products.find((e)=>e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <ProductSection data={data_product} title={"Related Section"}/>
    </div>
  )
}

export default Product