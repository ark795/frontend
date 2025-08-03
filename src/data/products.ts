export type Product = {
    id: string,
    title: string,
    description: string,
    price: number,
    image: string,
    category: string
}

export const products: Product[] = [
  {
    id: "1",
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 149.99,
    image: "https://via.placeholder.com/300x200?text=Headphones",
    category: "Electronics",
  },
  {
    id: "2",
    title: "Running Shoes",
    description: "Lightweight and comfortable running shoes.",
    price: 89.99,
    image: "https://via.placeholder.com/300x200?text=Shoes",
    category: "Footwear",
  },
  {
    id: "3",
    title: "Smart Watch",
    description: "Track your fitness and notifications.",
    price: 199.99,
    image: "https://via.placeholder.com/300x200?text=Watch",
    category: "Electronics",
  },
  {
    id: "4",
    title: "Backpack",
    description: "Durable backpack for everyday use.",
    price: 59.99,
    image: "https://via.placeholder.com/300x200?text=Backpack",
    category: "Bags",
  },
]