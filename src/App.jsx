import { Route, Routes } from "react-router-dom"
import { useState } from "react"

import Header from "./components/Header"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Product from "./pages/Product"
import CartModal from "./components/CartModal"

function App() {
  const [cart, setCart] = useState([])
  const [cartModalVisible, setCartModalVisible] = useState(false)

  const displayCartModal = () => {
    setCartModalVisible(true)
  }

  const addToCart = (product) => {
    const temp = [];
    temp.push(product)
    setCart([...cart, product])

    console.log(cart)
    setCartModalVisible(true)
  }


  const hideCartModal = () => {
    setCartModalVisible(false)
  }


  return (
    <div className="app">
      <Header displayCartModal={displayCartModal} />

      <div className="m-auto max-w-screen-xl">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        </Routes>
      </div>
      <CartModal
        cart={cart}
        cartModalVisible={cartModalVisible}
        hideCartModal={hideCartModal}
      />
    </div>
  )
}

export default App
