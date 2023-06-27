import {
  PRODUCTS_LOAD,
  SET_LIST_VIEW,
  SET_GRID_VIEW,
  SORT_PRODUCTS,
  SET_SORT,
  SET_FILTER,
} from "../actions"

const filterReducer = (state, action) => {
  if (action.type === PRODUCTS_LOAD) {
    return {
      ...state,
      filteredProducts: [...action.payload.products],
      allProducts: [...action.payload.products],
      filterLoading: false,
    }
  }

  if (action.type === SET_GRID_VIEW) {
    return {
      ...state,
      showGrid: true,
    }
  }

  if (action.type === SET_LIST_VIEW) {
    return {
      ...state,
      showGrid: false,
    }
  }

  if (action.type === SET_SORT) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    }
  }

  if (action.type === SORT_PRODUCTS) {
    let tempProducts = [...state.filteredProducts]
    if (state.sort === "price_low_high") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price)
    }
    if (state.sort === "price_high_low") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price)
    }
    if (state.sort === "name_a_z") {
      tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (state.sort === "name_z_a") {
      tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name))
    }
    return {
      ...state,
      filteredProducts: tempProducts,
    }
  }

  if (action.type === SET_FILTER) {
    return {
      ...state,
      filters: {
        ...state.filters,
        [action.payload.name]: action.payload.value,
      },
    }
  }

  return { ...state }

  throw new Error(`${action.type} was not found in the reducer`)
}
export default filterReducer
