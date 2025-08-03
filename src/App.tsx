import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductDetailPage from "./routes/ProductDetailPage"
import ProductsPage from './routes/ProductsPage'
import CategoriesPage from './routes/CategoriesPage'
import CartPage from './routes/CartPage'
import CheckoutPage from './routes/CheckoutPage'
import OrdersPage from './routes/OrdersPage'
import Layout from './components/ui/Layout'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
      </Route>
    </Routes>
  )
}

export default App
