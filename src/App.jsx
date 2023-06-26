import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home, About, Error, Products, SingleProduct, Cart } from "./pages"
import { Navbar, Sidebar, Footer } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App
