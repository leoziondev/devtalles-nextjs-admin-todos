import { cookies } from "next/headers";

import { products, type Product } from "@/products/data/products";

import { ItemCard } from "@/shopping-cart/components/ItemCart";

export const metadata = {
 title: 'Products Cart',
 description: 'SEO Title',
};

interface ProductInCartProps {
  product: Product
  quantity: number
}

const getProductsInCart = ( cart: { [id: string]: number }): ProductInCartProps[] => {
  const productsInCart: ProductInCartProps[] = []

  for ( const id of Object.keys(cart) ) {
    const product = products.find( prod => prod.id === id )

    if ( product ) {
      productsInCart.push({ product, quantity: cart[id] })
    }
  }

  return productsInCart
}

export default function CartPage() {
  const cookieStore = cookies()
  const cart = JSON.parse( cookieStore.get('cart')?.value ?? '{}' ) as { [id: string]: number }
  const productsInCart = getProductsInCart(cart)

  return (
    <div>
      <span className="text-3xl font-bold mb-10 block">Cart Products</span>

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {productsInCart.map(({product, quantity}) => (
            <ItemCard
              key={product.id}
              product={product}
              quantity={quantity}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
