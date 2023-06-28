import { useReducer } from "react"
import { createContext, useContext } from "react"
import { ADD_TO_CART } from "../actions"
import reducer from "../reducers/cartReducer"

const CartContext = createContext()

const initialState = {
  cart: [],
  subTotal: 0,
  shippingFee: 534,
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItemToCart = (id, name, mainColor, price, itemAmount, url) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, name, mainColor, price, itemAmount, url },
    })
  }
  return (
    <CartContext.Provider value={{ ...state, addItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => useContext(CartContext)

export { useCartContext, CartProvider }
