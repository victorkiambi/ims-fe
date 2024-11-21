export async function GET() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
    return await res.json();
}

