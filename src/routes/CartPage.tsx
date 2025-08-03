import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { removeFromCart } from "../store/cartSlice";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function CartPage() {
    const items = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {items.map((item) => (
                            <li key={item.id} className="flex justify-between items-center">
                                <div>
                                    {item.title} × {item.quantity}
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    Remove
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <div className="text-right font-semibold text-lg">
                        Total: ${total.toFixed(2)}
                    </div>
                    <Link to="/checkout">
                        <Button>Proceed to Checkout</Button>
                    </Link>
                </>
            )}
        </div>
    )
}