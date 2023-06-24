import {
  TOGGLE_SIDEBAR,
  PRODUCTS_FETCH_BEGIN,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
} from "../actions"

const productsReducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar }
  }

  if (action.type === PRODUCTS_FETCH_BEGIN) {
    return { ...state, productsLoading: true }
  }

  if (action.type === PRODUCTS_FETCH_SUCCESS) {
    const featuredProducts = action.payload.products.filter(
      (product) => product.featured === true
    )
    return {
      ...state,
      productsLoading: false,
      products: action.payload.products,
      featuredProducts,
    }
  }

  if (action.type === PRODUCTS_FETCH_ERROR) {
    return { ...state, productsLoading: false, productsError: true }
  }

  return state

  throw new Error(`${action.type} is not handled in the reducer.`)
}
export default productsReducer
