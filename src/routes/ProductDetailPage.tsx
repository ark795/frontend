import { useParams } from "react-router-dom";
import { products } from "../data/products";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Button } from "../components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import type { AddDispatch } from "../store";

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const dispatch = useDispatch<AddDispatch>()

  if (!product) return <div className="p-8 text-red-500">Product not found</div>

  return (
    <div className="p-8 flex flex-col md:flex-row gap-10">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-1/2 rounded-xl object-cover"
      />
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>${product.price.toFixed(2)}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>{product.description}</p>
          <Button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}