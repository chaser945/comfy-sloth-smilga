import { BrowserRouter, Routes, Route } from "react-router-dom"

import {
  Home,
  About,
  Error,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  AuthWrapper,
} from "./pages"
import { Navbar, Sidebar, Footer, PrivateRouteCheckout } from "./components"

const App = () => {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <PrivateRouteCheckout>
                <Checkout />
              </PrivateRouteCheckout>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  )
}
export default App
