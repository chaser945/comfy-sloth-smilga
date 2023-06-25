import { createContext, useContext, useReducer, useEffect } from "react"
import {
  TOGGLE_SIDEBAR,
  PRODUCTS_FETCH_BEGIN,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
  SINGLE_PRODUCT_FETCH_BEGIN,
  SINGLE_PRODUCT_FETCH_SUCCESS,
  SINGE_PRODUCT_FETCH_ERROR,
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
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},
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
      console.log(error)
      dispatch({ type: PRODUCTS_FETCH_ERROR })
    }
  }

  const fetchSingleProduct = async (url) => {
    dispatch({ type: SINGLE_PRODUCT_FETCH_BEGIN })
    try {
      const response = await axios.get(url)
      const singleProduct = response.data
      console.log(singleProduct)
      dispatch({
        type: SINGLE_PRODUCT_FETCH_SUCCESS,
        payload: { singleProduct },
      })
    } catch (error) {
      console.log(error)
      dispatch({ type: SINGE_PRODUCT_FETCH_ERROR })
    }
  }

  useEffect(() => {
    fetchProducts(url)
  }, [])

  return (
    <ProductsContext.Provider
      value={{ ...state, toggleSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

const useProductsContext = () => useContext(ProductsContext)

export { ProductsProvider, useProductsContext }
