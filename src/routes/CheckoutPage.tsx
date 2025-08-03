import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../store"
import { clearCart } from "../store/cartSlice"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { useEffect } from "react"

export default function CheckoutPage() {
  const items = useSelector((state: RootState) => state.cart.items)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (items.length === 0) {
      navigate("/")
    }
  }, [items, navigate])

  const handlePlaceOrder = () => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    orders.push({ items, total, date: new Date().toISOString() })
    localStorage.setItem("orders", JSON.stringify(orders))
    dispatch(clearCart())
    navigate("/orders")
  }

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Checkout</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            {item.title} × {item.quantity}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold">Total: ${total.toFixed(2)}</div>
      <Button onClick={handlePlaceOrder}>Place Order</Button>
    </div>
  )
}
