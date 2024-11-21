'use client';
import {GetProducts} from "../api/products/route";
import {useCart} from "../context/CartContext";
import {useEffect, useState} from "react";

export default  function Shop() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await GetProducts();
                setProducts(data.products);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []);


    return (
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                    <div>
                        <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Electronics</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button data-modal-toggle="filterModal" data-modal-target="filterModal" type="button"
                                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
                            <svg className="-ms-0.5 me-2 size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                      d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/>
                            </svg>
                            Filters
                            <svg className="-me-0.5 ms-2 size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 9-7 7-7-7"/>
                            </svg>
                        </button>
                        <button id="sortDropdownButton1" data-dropdown-toggle="dropdownSort1" type="button"
                                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
                            <svg className="-ms-0.5 me-2 size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"/>
                            </svg>
                            Sort
                            <svg className="-me-0.5 ms-2 size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 9-7 7-7-7"/>
                            </svg>
                        </button>
                        <div id="dropdownSort1"
                             className="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                             data-popper-placement="bottom">
                            <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                aria-labelledby="sortDropdownButton">
                                <li>
                                    <a href="#"
                                       className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> The
                                        most popular </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Newest </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Increasing
                                        price </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Decreasing
                                        price </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> No.
                                        reviews </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Discount
                                        % </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (

                        <div key={product.id} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <div className="h-56 w-full">
                            <a href="#">
                                <img className="mx-auto h-full dark:hidden"
                                     src={product.images[0]} alt=""/>
                                <img className="mx-auto hidden h-full dark:block"
                                     src={product.images[0]}
                                     alt=""/>
                            </a>
                        </div>
                        <div className="pt-6">
                            {/*<div className="mb-4 flex items-center justify-between gap-4">*/}
                            {/*    <span*/}
                            {/*        className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">*/}
                            {/*        Up to 35% off */}
                            {/*    </span>*/}

                            {/*    <div className="flex items-center justify-end gap-1">*/}
                            {/*        <div [id]="tooltip-quick-look" role="tooltip"*/}
                            {/*             className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"*/}
                            {/*             data-popper-placement="top">*/}
                            {/*            Quick look*/}
                            {/*            <div className="tooltip-arrow" data-popper-arrow=""></div>*/}
                            {/*        </div>*/}

                            {/*        <button type="button" data-tooltip-target="tooltip-add-to-favorites"*/}
                            {/*                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">*/}
                            {/*            <span className="sr-only"> Add to Favorites </span>*/}
                            {/*            <svg className="size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                 fill="none" viewBox="0 0 24 24">*/}
                            {/*                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                            {/*                      strokeWidth="2"*/}
                            {/*                      d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"/>*/}
                            {/*            </svg>*/}
                            {/*        </button>*/}
                            {/*        <div [id]="tooltip-add-to-favorites" role="tooltip"*/}
                            {/*             className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"*/}
                            {/*             data-popper-placement="top">*/}
                            {/*            Add to favorites*/}
                            {/*            <div className="tooltip-arrow" data-popper-arrow=""></div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <a href="#"
                               className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                                {product.title}
                            </a>

                            <div className="mt-4 flex items-center justify-between gap-4">
                                <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                                    ${product.price}
                                </p>

                                <button type="button"
                                        onClick={() => addToCart(product)}
                                        className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <svg className="-ms-2 me-2 size-5" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"/>
                                    </svg>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="w-full text-center">
                    <button type="button"
                            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show
                        more
                    </button>
                </div>
            </div>
        </section>
    );
}