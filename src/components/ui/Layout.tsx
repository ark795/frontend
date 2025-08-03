import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <header className="bg-white border-b px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">🛒 E-Commerce</Link>
        </h1>
        <nav className="flex gap-6">
          <Link to="/">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/orders">Orders</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
