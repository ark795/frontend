import { useQuery } from "@tanstack/react-query"
import { type Product, products } from "../data/products"
import { z } from "zod"

const ProductSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string().url(),
    category: z.string(),
})

const ProductsSchema = z.array(ProductSchema)

export const useProducts = () =>
  useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      // Simulate async API + validate with zod
      await new Promise((res) => setTimeout(res, 500))
      const parsed = ProductsSchema.safeParse(products)
      if (!parsed.success) throw new Error("Invalid data format")
      return parsed.data
    },
  })