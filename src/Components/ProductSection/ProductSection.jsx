import './ProductSection.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const ProductSection = (props) => {
    const {data,title} = props

  return (
    <div className='productsection'>
        <h1>{title}</h1>
        <hr />
        <div className="productsection-item">
            {data.map((item,i)=>(
                <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            ))}
        </div>
        </div>
  )
}

export default ProductSection