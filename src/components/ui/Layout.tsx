// import { Link, Outlet } from "react-router-dom"

// export default function Layout() {
//   return (
//     <div>
//       <header className="bg-white border-b px-8 py-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold">
//           <Link to="/">🛒 E-Commerce</Link>
//         </h1>
//         <nav className="flex gap-6">
//           <Link to="/">Products</Link>
//           <Link to="/categories">Categories</Link>
//           <Link to="/cart">Cart</Link>
//           <Link to="/orders">Orders</Link>
//         </nav>
//       </header>
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   )
// }









import { Link, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "../../store"

export default function Layout() {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  return (
    <div>
      <header className="bg-white sticky top-0 z-50 border-b shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">🛒 E-Shop</Link>
        </h1>
        <nav className="flex gap-6 items-center text-sm font-medium">
          <Link to="/">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/cart" className="relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-primary text-white text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
