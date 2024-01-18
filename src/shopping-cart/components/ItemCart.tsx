'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

import type { Product } from "@/products/data/products";
import { addProductToCart, removeSingleItemFromCart } from "../actions/actions";

import { IoAddCircleOutline, IoRemove } from "react-icons/io5";


interface Props {
  product:  Product;
  quantity: number;
}


export const ItemCard = ({ product, quantity }: Props) => {
  
  const router = useRouter();

  function onAddToCart() {
    addProductToCart(product.id);
    router.refresh();
  }

  function onRemoveItem() {
    removeSingleItemFromCart(product.id);
    router.refresh();
  }

  return (
    <div className="flex items-center shadow rounded-lg w-full bg-white border-gray-100">
      
      <div className="p-2">
        <Image
            width={200}
            height={200}
            className="rounded" 
            src={ product.image }
            alt={ product.name } />
      </div>
      
      <div className="px-5 pb-5 w-full flex flex-col mt-2">
        <a href="#">
          <h3 className="font-semibold text-xl tracking-tight text-slate-800">
            { product.name } - <small className="text-sm">${ product.price.toFixed(2) }</small>
          </h3>
        </a>      

        <div className="flex flex-col items-start justify-between">          
          <span className="text-gray-900 dark:text-slate-800">
            Cantidad: { quantity }
          </span>
          <span className="font-bold text-slate-800">
            Total: ${ (product.price * quantity).toFixed(2) }
          </span>
        </div>


      </div>

        <div className="flex p-5 items-center justify-center">
            <button
                onClick={ onAddToCart }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <IoAddCircleOutline size={25} />
            </button>
            <span className="text-2xl text-slate-800 mx-10">{quantity}</span>
            <button
                onClick={ onRemoveItem }
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                <IoRemove size={25} />
            </button>
        </div>
    </div>
  )
}