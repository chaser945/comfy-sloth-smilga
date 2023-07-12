import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { ProductsProvider } from "./context/productsContext"
import { FilterProvider } from "./context/filterContext"
import { CartProvider } from "./context/cartContext"
import { Auth0Provider } from "@auth0/auth0-react"
import { UserProvider } from "./context/UserContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-7rnj1dlvdgblccg8.us.auth0.com"
    clientId="vx2tmv0CmQbXDJ7ikXJC402S6xjqRH8X"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
)
