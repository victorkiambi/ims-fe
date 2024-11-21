import ProductCard from "@/components/product/ProductCard";
import {GetProducts} from "@/app/api/products/route";

export default async function ProductPage() {
    try {
        const products = await GetProducts();
        return (
            <section>
                <div className="container grid grid-cols-1 gap-4 md:grid-cols-4">
                    {products.products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </section>
        );
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return (
            <div className="container mx-auto p-6">
                <p>Sorry, there was an error loading the products.</p>
            </div>
        );
    }
}