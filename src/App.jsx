import { Route, Routes } from "react-router-dom"
import { useState } from "react"

import NotFound from "./components/NotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Product from "./pages/Product"
import CartModal from "./components/CartModal"
import MenuModal from "./components/MenuModal"

function App() {
  const [cart, setCart] = useState([])
  const [cartModalVisible, setCartModalVisible] = useState(false)
  const [menuModalVisible, setMenuModalVisible] = useState(false)


  //menu modal
  const displayMenuModal = () => {
    setMenuModalVisible(true)
  }


  const hideMenuModal = () => {
    setMenuModalVisible(false)
  }


  //cart logic
  const displayCartModal = () => {
    setCartModalVisible(true)
  }



  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.some(item => item.id === product.id)) {
        const updatedCart = prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return updatedCart;
      } else {
        product.quantity = 1;
        const newCart = [...prevCart, product];
        return newCart;
      }
    });

    setCartModalVisible(true)

  }


  const addOneProduct = (productId) => {
    const updatedCart = cart.filter(item =>
      item.id === productId ? { ...item, quantity: item.quantity++ } : item
    )
    setCart(updatedCart)
  }

  const removeOneProduct = (productId) => {
    if (cart.some(item => item.id === productId && item.quantity <= 1)) {
      removeFromCart(productId)
    } else {
      const updatedCart = cart.filter(item =>
        item.id === productId ? { ...item, quantity: item.quantity-- } : item
      )

      setCart(updatedCart)
    }
  }

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item =>
      item.id !== productId
    )
    setCart(updatedCart)
  }


  const hideCartModal = () => {
    setCartModalVisible(false)
  }


  return (
    <div className="app">
      <Header
        displayCartModal={displayCartModal}
        displayMenuModal={displayMenuModal}
        cartQuantity={cart.length}
      />

      <div className="mx-auto">
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        </Routes>
      </div>
      <Footer />
      <CartModal
        cart={cart}
        cartModalVisible={cartModalVisible}
        hideCartModal={hideCartModal}
        removeFromCart={removeFromCart}
        addOneProduct={addOneProduct}
        removeOneProduct={removeOneProduct}
      />
      <MenuModal
        menuModalVisible={menuModalVisible}
        hideMenuModal={hideMenuModal}
      />
    </div>
  )
}

export default App
