export async function GetProducts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
    return await res.json();
}

//Get a single product
export async function GetProduct(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}`);
    return await res.json();
}