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






// import { useProducts } from "../hooks/useProducts";
// import { useCategoryFilter } from "../hooks/useCategoryFilter";
// import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "../components/ui/card";
// import { Link } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";

// export default function ProductsPage() {
//   const { data, isLoading, isError } = useProducts();
//   const { selectedCategory, searchText, setSearchText } = useCategoryFilter();

//   if (isLoading) return <div className="p-8">Loading...</div>;
//   if (isError) return <div className="p-8 text-red-500">Error loading products</div>;
//   if (!data) return <div className="p-8">No products available</div>;

//   const filteredProducts = data.filter((product) => {
//     const matchesCategory =
//       !selectedCategory || product.category === selectedCategory

//     const matchesSearch =
//       product.title.toLowerCase().includes(searchText.toLowerCase()) ||
//       product.description.toLowerCase().includes(searchText.toLowerCase())

//     return matchesCategory && matchesSearch
//   })

//   return (
//     <div className="p-8 space-y-6">
//       <Input
//         placeholder="Search products..."
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//         className="max-w-sm"
//       />
//       <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {filteredProducts.map((product) => (
//           <Card key={product.id}>
//             <Link to={`/product/${product.id}`}>
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="h-40 w-full object-cover rounded-t-xl"
//               />
//             </Link>
//             <CardHeader>
//               <CardTitle>{product.title}</CardTitle>
//               <CardDescription>${product.price.toFixed(2)}</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-muted-foreground line-clamp-2">
//                 {product.description}
//               </p>
//               <Link to={`/product/${product.id}`}>
//                 <Button className="mt-4">More Details</Button>
//               </Link>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useProducts } from "../hooks/useProducts"
// import { useCategoryFilter } from "../hooks/useCategoryFilter"
// import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "../components/ui/card"
// import { Link } from "react-router-dom"
// import { Input } from "../components/ui/input"
// import { Button } from "../components/ui/button"
// import { Badge } from "../components/ui/badge"
// import { Skeleton } from "../components/ui/skeleton"

// export default function ProductsPage() {
//   const { data, isLoading, isError } = useProducts()
//   const { selectedCategory, setCategory, searchText, setSearchText } = useCategoryFilter()

//   if (isLoading) return <div className="p-8">Loading...</div>
//   if (isError || !data) return <div className="p-8 text-red-500">Failed to load products</div>

//   const categories = Array.from(new Set(data.map((p) => p.category)))

//   const filteredProducts = data.filter((product) => {
//     const matchesCategory =
//       !selectedCategory || product.category === selectedCategory

//     const matchesSearch =
//       product.title.toLowerCase().includes(searchText.toLowerCase()) ||
//       product.description.toLowerCase().includes(searchText.toLowerCase())

//     return matchesCategory && matchesSearch
//   })

//   if (isLoading) {
//   return (
//     <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {Array.from({ length: 8 }).map((_, i) => (
//         <div key={i} className="rounded-xl border p-4 space-y-4">
//           <Skeleton className="h-40 w-full rounded-xl" />
//           <Skeleton className="h-6 w-2/3" />
//           <Skeleton className="h-4 w-1/2" />
//           <Skeleton className="h-10 w-full" />
//         </div>
//       ))}
//     </div>
//   )
// }

//   return (
//     <div className="p-6 space-y-6">
//       {/* Search & Filter */}
//       <div className="bg-muted/30 rounded-xl p-4 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
//         <Input
//           placeholder="Search products..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           className="max-w-md"
//         />
//         <div className="flex flex-wrap gap-2">
//           <Button
//             onClick={() => setCategory(null)}
//             variant={!selectedCategory ? "default" : "outline"}
//             size="sm"
//           >
//             All
//           </Button>
//           {categories.map((cat) => (
//             <Button
//               key={cat}
//               onClick={() => setCategory(cat)}
//               variant={selectedCategory === cat ? "default" : "outline"}
//               size="sm"
//             >
//               {cat}
//             </Button>
//           ))}
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <Card
//             key={product.id}
//             className="transition-all hover:shadow-md hover:scale-[1.02] flex flex-col"
//           >
//             <Link to={`/product/${product.id}`}>
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="h-40 w-full object-cover rounded-t-xl"
//               />
//             </Link>

//             <CardHeader className="flex-1">
//               <CardTitle className="text-base">{product.title}</CardTitle>
//               <CardDescription className="flex items-center justify-between">
//                 <span>${product.price.toFixed(2)}</span>
//                 <Badge variant="outline">{product.category}</Badge>
//               </CardDescription>
//             </CardHeader>

//             <CardContent className="flex flex-col gap-3">
//               <p className="text-sm text-muted-foreground line-clamp-2">
//                 {product.description}
//               </p>
//               <Link to={`/product/${product.id}`} className="mt-auto">
//                 <Button className="w-full">More Details</Button>
//               </Link>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {filteredProducts.length === 0 && (
//         <div className="text-center text-muted-foreground py-12 text-lg">
//           No products match your search.
//         </div>
//       )}
//     </div>
//   )
// }


import { useProducts } from "../hooks/useProducts"
import { useCategoryFilter } from "../hooks/useCategoryFilter"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Skeleton } from "../components/ui/skeleton"
import { Link } from "react-router-dom"

export default function ProductsPage() {
  const { data, isLoading, isError } = useProducts()
  const {
    selectedCategory,
    setCategory,
    searchText,
    setSearchText,
  } = useCategoryFilter()

  // Show skeleton while loading
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-xl border p-4 space-y-4">
            <Skeleton className="h-40 w-full rounded-xl" />
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    )
  }

  // Handle error state
  if (isError || !data) {
    return <div className="p-8 text-red-500">Failed to load products</div>
  }

  // Filter products
  const categories = Array.from(new Set(data.map((p) => p.category)))

  const filteredProducts = data.filter((product) => {
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory

    const matchesSearch =
      product.title.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <div className="p-6 space-y-6">
      {/* Filter UI */}
      <div className="bg-muted/30 rounded-xl p-4 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <Input
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="max-w-md"
        />
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setCategory(null)}
            variant={!selectedCategory ? "default" : "outline"}
            size="sm"
          >
            All
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setCategory(cat)}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="transition-all hover:shadow-md hover:scale-[1.02] flex flex-col"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image || "/fallback.jpg"}
                alt={product.title}
                onError={(e) =>
                  (e.currentTarget.src = "/fallback.jpg")
                }
                className="h-40 w-full object-cover rounded-t-xl"
              />
            </Link>

            <CardHeader className="flex-1">
              <CardTitle className="text-base">{product.title}</CardTitle>
              <CardDescription className="flex items-center justify-between">
                <span>${product.price.toFixed(2)}</span>
                <Badge variant="outline">{product.category}</Badge>
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.description}
              </p>
              <Button asChild className="w-full mt-auto">
                <Link to={`/product/${product.id}`}>More Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-muted-foreground py-12 text-lg">
          No products match your search.
        </div>
      )}
    </div>
  )
}
