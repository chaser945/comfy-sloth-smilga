import { PRODUCTS_LOAD } from "../actions"

const filterReducer = (state, action) => {
  if (action.type === PRODUCTS_LOAD) {
    return {
      ...state,
      filteredProducts: [...action.payload.products],
      allProducts: [...action.payload.products],
      filterLoading: false,
    }
  }
}
export default filterReducer
