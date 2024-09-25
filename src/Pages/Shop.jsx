import Hero from "../Components/Hero/Hero"
import NewsLetter from "../Components/NewsLetter/NewsLetter"
import Offers from "../Components/Offers/Offers"
import ProductSection from "../Components/ProductSection/ProductSection"
import data_product from "../Components/Assets/data"
import new_collection from '../Components/Assets/new_collections'

const Shop = () => {
  return (
    <div>
      <Hero />
      <ProductSection data={data_product} title={"POPULAR IN WOMEN"}/>
      <Offers />
      <ProductSection data={new_collection} title={"NEW COLLECTIONS"}/>
      <NewsLetter/>
    </div>
  )
}

export default Shop