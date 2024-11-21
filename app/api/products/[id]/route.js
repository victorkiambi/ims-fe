//Get a single product
export async function GET(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}`);
    return await res.json();
}
