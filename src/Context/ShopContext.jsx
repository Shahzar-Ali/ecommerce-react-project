import { createContext } from "react"
import all_products from '../Components/Assets/all_product'
import { useState } from "react"

export const shopContext = createContext(null)

const defaultCart = ()=>{
  let cart = {}
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0
  } 
  return cart;
}

const ShopContextProvider = (props) => {

  const [cartItems,setCartItems] = useState(defaultCart())

  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}))
  }

  const getTotalItems = () =>{
    let totalItem = 0
    for(const item in cartItems){

      if(cartItems[item] > 0){
        totalItem+= cartItems[item]
      }
    }
    return totalItem;
  }

  const removeToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
  }


  const contextValue = { all_products,cartItems,addToCart,removeToCart, getTotalItems }

 

  return (

    <shopContext.Provider value={contextValue}>

      {props.children}

    </shopContext.Provider>

  )
}

export default ShopContextProvider;