import ProductPage from "@/app/product/page";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <main className="container mx-auto p-6">
                <section className="bg-white  antialiased dark:bg-gray-900 md:py-4">
                    <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
                        <div className="content-center justify-self-start md:col-span-7 md:text-start">
                            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">Limited
                                Time Offer!<br/>Up to 50% OFF!</h1>
                            <p className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">Dont
                                Wait - Limited Stock at Unbeatable Prices!</p>
                            <Link href="/shop"
                               className="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Shop
                                Now</Link>
                        </div>
                        <div className="hidden md:col-span-5 md:mt-0 md:flex">
                            <img className="dark:hidden"
                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg"
                                 alt="shopping illustration"/>
                            <img className="hidden dark:block"
                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg"
                                 alt="shopping illustration"/>
                        </div>
                    </div>

                </section>

                <h1 className="mt-8 py-4 text-center text-4xl font-bold">Our Products</h1>

                <ProductPage/>
            </main>
        </>
    );
}