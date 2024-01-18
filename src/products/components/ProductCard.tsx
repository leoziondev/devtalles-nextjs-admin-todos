'use client'

import Image from "next/image"
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5"
import { Stars } from ".."
import { addProductToCart } from "@/shopping-cart/actions/actions"

interface Props {
    id    : string
    name  : string
    price : number
    rating: number
    image : string
}

const ProductCard = ({ id, name, price, rating, image }: Props) => {

    const handleAddToCart = () => {
        addProductToCart(id)

    }

  return (
    <div className="bg-white shadow rounded-lg max-w-sm">
      
      <div className="p-2">
        <Image
            width={500}
            height={500}
            className="rounded" 
            src={image} 
            alt="product image" />
      </div>
      
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight">{name}</h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">          

          {Array(rating).fill(0).map((x,i) => (
            <Stars key={i} />
          ))}

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          
          <div className="flex">
            <button
            onClick={handleAddToCart}
              className="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <IoAddCircleOutline size={25} />
            </button>
            <button
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <IoTrashOutline size={20} />
            </button>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default ProductCard
