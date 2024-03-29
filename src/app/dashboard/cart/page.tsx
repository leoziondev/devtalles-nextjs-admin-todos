import { cookies } from "next/headers";

import { products, type Product } from "@/products/data/products";

import { ItemCard } from "@/shopping-cart/components/ItemCart";
import { WidgetItem } from "@/components";

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

  const totalToPay = productsInCart.reduce(
    ( prev, current ) => ( current.product.price * current.quantity ) + prev, 0)

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

        <div className="flex flex-col w-full sm:w-4/12">
          <WidgetItem title="Total Cart">
            <div className="mt-2 flex justify-center">
              <h3 className="text-3xl font-bold text-slate-700">$ {(totalToPay * 1.15).toFixed(2)}</h3>
            </div>
            <span className="font-bold text-center text-slate-500">TAX 15% $ {(totalToPay * 0.15).toFixed(2)}</span>
          </WidgetItem>
        </div>
      </div>
    </div>
  )
}
