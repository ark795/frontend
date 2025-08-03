import { useEffect, useState } from "react"

type Order = {
  items: { id: string; title: string; quantity: number }[]
  total: number
  date: string
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("orders")
    if (stored) {
      setOrders(JSON.parse(stored))
    }
  }, [])

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Your Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border rounded-xl p-4 space-y-2">
            <div className="text-sm text-muted-foreground">
              Date: {new Date(order.date).toLocaleString()}
            </div>
            <ul className="pl-4 list-disc">
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.title} × {item.quantity}
                </li>
              ))}
            </ul>
            <div className="font-semibold">Total: ${order.total.toFixed(2)}</div>
          </div>
        ))
      )}
    </div>
  )
}
