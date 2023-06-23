import { createContext, useContext, useReducer } from "react"
import { TOGGLE_SIDEBAR } from "../actions"
import reducer from "../reducers/productsReducer"

const ProductsContext = createContext()

const initialState = {
  showSidebar: false,
}
const ProductsProvider = ({ children }) => {
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ProductsContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </ProductsContext.Provider>
  )
}

const useProductsContext = () => useContext(ProductsContext)

export { ProductsProvider, useProductsContext }
