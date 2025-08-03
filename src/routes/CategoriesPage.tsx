import { products } from "../data/products";
import { useCategoryFilter } from "../hooks/useCategoryFilter";
import { Button } from "../components/ui/button";

export default function CategoriesPage() {
    const { selectedCategory, setCategory } = useCategoryFilter()

    const categories = [...new Set(products.map((p) => p.category))]

    return (
        <div className="p-8 space-y-4">
            <h2 className="text-xl font-bold">Categories</h2>
            <div className="flex flex-wrap gap-2">
                <Button onClick={() => setCategory(null)} variant="outline">
                    All
                </Button>
                {categories.map((cat) => (
                    <Button key={cat} onClick={() => setCategory(cat)} variant="outline">
                        {cat}
                    </Button>
                ))}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products
                    .filter((p) => !selectedCategory || p.category === selectedCategory)
                    .map((p) => (
                        <div key={p.id} className="border p-4 rounded-xl">
                            <h3 className="font-semibold">{p.title}</h3>
                            <p className="text-sm text-muted-foreground">{p.category}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}