import { createContext, useContext, useReducer, useEffect } from "react"
import { useProductsContext } from "./productsContext"
import { PRODUCTS_LOAD } from "../actions"
import reducer from "../reducers/filterReducer"

const FilterContext = createContext()

const initialState = {
  filteredProducts: [],
  allProducts: [],
  showGrid: true,
}

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: PRODUCTS_LOAD, payload: { products } })
  }, [products])

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () => useContext(FilterContext)

export { useFilterContext, FilterProvider }
