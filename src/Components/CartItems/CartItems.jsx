import './CartItems.css'; 
import { shopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_products, cartItems, removeToCart } = useContext(shopContext);

    return (
        <div className='cartitems'>
            <div className="table-container">
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th>Titles</th>
                            <th>Prices</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {all_products.map((e) => {
                            if (cartItems[e.id] > 0) {
                                return (
                                    <tr key={e.id}>
                                        <td><img src={e.image} alt={e.name} className='carticon-product-icon' /></td>
                                        <td>{e.name}</td>
                                        <td>${e.new_price.toFixed(2)}</td>
                                        <td>
                                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                        </td>
                                        <td>${(e.new_price * cartItems[e.id]).toFixed(2)}</td>
                                        <td>
                                            <img 
                                                src={remove_icon} 
                                                onClick={() => removeToCart(e.id)} 
                                                alt="remove icon" 
                                                className="remove-icon" 
                                            />
                                        </td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
            </div>
            <div className='cartitems-down'>
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${0}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${0}</h3>
                    </div>
                <button>PROCEED TO CHECKOUT</button>
                </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text"  placeholder='promo code'/>
                    <button>Submit</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CartItems;
