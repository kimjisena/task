export default async function getResult (id?: number) {
    let result: any;

    if (typeof id === "number") {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        result = await response.json();
        return result;
    }
    const response = await fetch(`https://fakestoreapi.com/products`);
    result = await response.json();
    return result;
}
