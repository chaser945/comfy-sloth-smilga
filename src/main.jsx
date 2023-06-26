import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { ProductsProvider } from "./context/productsContext"
import { FilterProvider } from "./context/filterContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>
)
