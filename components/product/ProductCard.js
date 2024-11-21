'use client';
import Link from "next/link";
import { useCart } from '@/app/context/CartContext';
import Image from "next/image";
export default function ProductCard({product}){
    const { addToCart } = useCart();
    return (
        <div
            className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <Link href={`/product/${product.id}`}>
                <Image className="h-48 w-full rounded-lg object-cover"
                       width={300} height={300}
                    src={product.images[0]} alt=""/>
            </Link>
            <div className="px-5 pb-5">
                <h5 className="py-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                </h5>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">Ksh {product.price}</span>
                    {/*<a href="#">*/}
                        <button type="button"
                                onClick={() => addToCart(product)}
                                className="inline-flex items-center rounded-full border border-blue-700 p-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                            <svg className="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"/>
                            </svg>
                            <span className="sr-only">Icon description</span>
                        </button>
                    {/*</a>*/}
                </div>
            </div>
        </div>

    )
}