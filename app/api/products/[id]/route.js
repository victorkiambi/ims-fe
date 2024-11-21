//Get a single product
export async function GET(id) {
    const res = await fetch(`https://dummyjson.com/product/${id}`);
    return await res.json();
}
