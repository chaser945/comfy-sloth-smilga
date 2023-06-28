import {
  PRODUCTS_LOAD,
  SET_LIST_VIEW,
  SET_GRID_VIEW,
  SORT_PRODUCTS,
  SET_SORT,
  SET_FILTER,
  CLEAR_FILTER,
  FILTER_PRODUCTS,
} from "../actions"

const filterReducer = (state, action) => {
  if (action.type === PRODUCTS_LOAD) {
    const priceArr = action.payload.products.map((c) => c.price)
    const maxPrice = Math.max(...priceArr)
    // console.log(maxPrice)
    return {
      ...state,
      filteredProducts: [...action.payload.products],
      allProducts: [...action.payload.products],
      filterLoading: false,
      filters: {
        ...state.filters,
        maxPrice,
        price: maxPrice,
      },
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

  if (action.type === CLEAR_FILTER) {
    return {
      ...state,
      filteredProducts: [...state.allProducts],
      filters: {
        ...state.filters,
        query: "",
        category: "all",
        company: "all",
        color: "all",
        price: state.filters.maxPrice,
        freeShipping: false,
      },
    }
  }

  if (action.type === FILTER_PRODUCTS) {
    let tempProducts = [...state.allProducts]
    // console.log(tempProducts)

    const { query, category, company, color, price, freeShipping } =
      state.filters
    // console.log(category)
    if (query) {
      tempProducts = tempProducts.filter((c) => c.name.startsWith(query))
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter((c) => c.category === category)
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter((c) => c.company === company)
    }
    if (color !== "all") {
      tempProducts = tempProducts.filter(
        (c) => c.colors.find((ele) => ele === color) === color
      )
    }
    if (freeShipping) {
      tempProducts = tempProducts.filter((c) => c.shipping === true)
    }

    tempProducts = tempProducts.filter((c) => c.price <= price)

    return {
      ...state,
      filteredProducts: tempProducts,
    }
  }

  // return { ...state }

  throw new Error(`${action.type} was not found in the reducer`)
}
export default filterReducer
