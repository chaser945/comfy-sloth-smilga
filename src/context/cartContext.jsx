import { useReducer, useEffect } from "react"
import { createContext, useContext } from "react"
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_PRODUCT,
  TOGGLE_AMOUNT,
  CALC_SUBTOTAL,
} from "../actions"
import reducer from "../reducers/cartReducer"

const CartContext = createContext()

const parseCart = () => {
  if (localStorage.getItem("cart")) {
    const cart = JSON.parse(localStorage.getItem("cart"))
    return cart
  } else {
    return []
  }
}

const initialState = {
  cart: parseCart(),
  subTotal: 0,
  shippingFee: 534,
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart))
    dispatch({ type: CALC_SUBTOTAL })
  }, [state.cart])

  const addItemToCart = (
    id,
    name,
    mainColor,
    price,
    itemAmount,
    url,
    stock
  ) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, name, mainColor, price, itemAmount, url, stock },
    })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  const removeProduct = (id) => {
    dispatch({ type: REMOVE_PRODUCT, payload: { id: id } })
  }

  const toggleAmount = (id, func) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, func } })
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItemToCart,
        clearCart,
        removeProduct,
        toggleAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => useContext(CartContext)

export { useCartContext, CartProvider }
