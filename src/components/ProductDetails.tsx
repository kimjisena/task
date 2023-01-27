import Image from "next/image";
import { type Product } from "./layout/MainLayout";
import { useRouter } from "next/router";

export default function ProductDetails ({ product, addToCart }: { product: Product, addToCart: any}) {
    const router = useRouter();

    return (
        <div className="flex flex-row w-4/5 mt-5">
            <div className={`rounded`}>
                <Image className={`rounded`} src={product.image} alt="Product Image" width={250} height={250} />
            </div>

            <div className={`flex flex-col justify-center ml-4 p-2`}>
                <div className="flex flex-row justify-between mb-4">
                    <div className={`flex flex-col justify-evenly`}>
                        <h1>{product.title}</h1>
                        <p className="py-3"> <span className="font-bold">Price:</span> $ {product.price}</p>
                        <p className="pb-3"><span className="font-bold">Category:</span>  {product.category}</p>
                        <p className="pb-3"><span className="font-bold">Rating:</span>  {product.rating.rate}/5</p>
                    </div>

                    <button className={`rounded-md bg-secondary p-2 h-fit`}
                        onClick={() => addToCart() }>
                            Add to Cart
                    </button>
                </div>

                <div className="flex flex-col">
                    <h1 className="font-bold text-lg">Description</h1>
                    {product.description}
                </div>
            </div>

        </div>
    );
}