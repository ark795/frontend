// import { useProducts } from "../hooks/useProducts";
// import { useCategoryFilter } from "../hooks/useCategoryFilter";
// import { products } from "../data/products";
// import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "../components/ui/card";
// import { Link } from "react-router-dom";
// import { Button } from "../components/ui/button";

// export default function ProductsPage() {
//   const { data, isLoading, isError } = useProducts()
//   const { selectedCategory } = useCategoryFilter()

//   const filteredProducts = selectedCategory
//     ? data.filter((product) => product.category === selectedCategory)
//     : data;


//   if (isLoading) return <div className="p-8">Loading...</div>
//   if (isError || !data) return <div className="p-8 text-red-500">Error loading products</div>

//   return (
//     <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {products.map((product) => (
//         <Card key={product.id}>
//           <Link to={`/product/${product.id}`}>
//             <img
//               src={product.image}
//               alt={product.title}
//               className="h-40 w-full object-cover rounded-t-xl"
//             />
//           </Link>
//           <CardHeader>
//             <CardTitle>{product.title}</CardTitle>
//             <CardDescription>${product.price.toFixed(2)}</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <p className="text-sm text-muted-foreground line-clamp-2">
//               {product.description}
//             </p>

//             <Link to={`/product/${product.id}`}>
//               <Button>More Details</Button>
//             </Link>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   )
// }






import { useProducts } from "../hooks/useProducts";
import { useCategoryFilter } from "../hooks/useCategoryFilter";
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function ProductsPage() {
  const { data, isLoading, isError } = useProducts();
  const { selectedCategory, searchText, setSearchText } = useCategoryFilter();

  if (isLoading) return <div className="p-8">Loading...</div>;
  if (isError) return <div className="p-8 text-red-500">Error loading products</div>;
  if (!data) return <div className="p-8">No products available</div>;

  const filteredProducts = data.filter((product) => {
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory

    const matchesSearch =
      product.title.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <div className="p-8 space-y-6">
      <Input
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="max-w-sm"
      />
      <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-cover rounded-t-xl"
              />
            </Link>
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>${product.price.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.description}
              </p>
              <Link to={`/product/${product.id}`}>
                <Button className="mt-4">More Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}