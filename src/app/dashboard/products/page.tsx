import { ProductCard } from "@/products";

export default function ProductsPage() {
  return (
    <>
        <span className="text-3xl font-bold mb-10 block">Products</span>
        <div className="grid sm:grid-cols-3 gap-2">
            <ProductCard />
        </div>
    </>
  )
}
