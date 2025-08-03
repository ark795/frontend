import { products } from "../data/products";
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-full object-cover rounded-t-xl"
          />
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>${product.price.toFixed(2)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>

            <Link to={`/product/${product.id}`}>
              <Button>More Details</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}