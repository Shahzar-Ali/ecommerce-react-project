import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from 'react'
import { shopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props
    const {addToCart} = useContext(shopContext)

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="product" />
                    <img src={product.image} alt="product" />
                    <img src={product.image} alt="product" />
                    <img src={product.image} alt="product" />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} alt="product" className="productdisplay-main-img" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>

                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_dull_icon} alt="star dull" />
                    <p>(113)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-discription">A lighweight, usually knitted,pullover shirt, close-fitting and with a round neckline and short sleees, worn as an undershirt or outer garment</div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=> addToCart(product.id)}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span> Women , T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span> Modern , Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay