import { createContext, useContext, useReducer, useEffect } from "react"
import {
  TOGGLE_SIDEBAR,
  PRODUCTS_FETCH_BEGIN,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
} from "../actions"
import reducer from "../reducers/productsReducer"
import axios from "axios"
import { products_url as url } from "../utils/constants"
const ProductsContext = createContext()

const initialState = {
  showSidebar: false,
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
}

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  const fetchProducts = async (url) => {
    dispatch({ type: PRODUCTS_FETCH_BEGIN })
    try {
      const response = await axios.get(url)
      console.log(response.data)
      dispatch({
        type: PRODUCTS_FETCH_SUCCESS,
        payload: { products: response.data },
      })
    } catch (error) {
      console.error(response.error)
      dispatch({ type: PRODUCTS_FETCH_ERROR })
    }
  }

  useEffect(() => {
    fetchProducts(url)
  }, [])

  return (
    <ProductsContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </ProductsContext.Provider>
  )
}

const useProductsContext = () => useContext(ProductsContext)

export { ProductsProvider, useProductsContext }
