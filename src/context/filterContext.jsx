import { createContext, useContext, useReducer, useEffect } from "react"
import { useProductsContext } from "./productsContext"
import {
  PRODUCTS_LOAD,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  SORT_PRODUCTS,
  SET_SORT,
  SET_FILTER,
  CLEAR_FILTER,
  FILTER_PRODUCTS,
} from "../actions"
import reducer from "../reducers/filterReducer"

const FilterContext = createContext()

const initialState = {
  filterLoading: true,
  filteredProducts: [],
  allProducts: [],
  showGrid: true,
  sort: "price_low_high",
  filters: {
    query: "",
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    maxPrice: 0,
    freeShipping: false,
  },
}

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: PRODUCTS_LOAD, payload: { products } })
  }, [products])

  useEffect(() => {
    // console.log(state.sort)
    dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [state.sort, products, state.filters])

  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW })
  }

  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW })
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch({ type: SET_SORT, payload: { name, value } })
  }

  const handleFilterChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === "category") {
      value = e.target.textContent
    }
    if (name === "color") {
      value = e.target.dataset.color
    }
    if (name === "freeShipping") {
      value = e.target.checked
    }
    if (name === "price") {
      value = Number(e.target.value)
    }
    dispatch({ type: SET_FILTER, payload: { name, value } })
  }

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        handleChange,
        handleFilterChange,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () => useContext(FilterContext)

export { useFilterContext, FilterProvider }
