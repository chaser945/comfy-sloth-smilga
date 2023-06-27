import {
  TOGGLE_SIDEBAR,
  PRODUCTS_FETCH_BEGIN,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
  SINGLE_PRODUCT_FETCH_BEGIN,
  SINGLE_PRODUCT_FETCH_SUCCESS,
  SINGE_PRODUCT_FETCH_ERROR,
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
    // console.log("error in fetching")
    return { ...state, productsLoading: false, productsError: true }
  }

  // SINGLE PRODUCT FETCH
  // ==================

  if (action.type === SINGLE_PRODUCT_FETCH_BEGIN) {
    return { ...state, singleProductLoading: true, singleProductError: false }
  }

  if (action.type === SINGLE_PRODUCT_FETCH_SUCCESS) {
    return {
      ...state,
      singleProductLoading: false,
      singleProduct: action.payload.singleProduct,
    }
  }

  if (action.type === SINGE_PRODUCT_FETCH_ERROR) {
    return {
      ...state,
      singleProductLoading: false,
      singleProductError: true,
    }
  }

  throw new Error(`${action.type} is not handled in the reducer.`)
}
export default productsReducer
