import { ProductCard } from "@/products";
import { products } from "@/products/data/products";

export default function ProductsPage() {
  return (
    <>
        <span className="text-3xl font-bold mb-10 block">Products</span>
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((prod) => (
                <ProductCard key={prod.id} {...prod}  />
            ))}
        </div>
    </>
  )
}
