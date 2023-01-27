import Image from "next/image";
import { type Product } from "./layout/MainLayout";
import { useRouter } from "next/router";

export default function ProductCard ({ product, page, removeFromCart }: {product: Product, page: string, removeFromCart: any}) {
    const router = useRouter();

    return (
        <li className={`flex flex-row justify-between m-4 border-b pb-2 w-[70%]`}>
            <div className={`rounded mr-3`}>
                <Image className={`rounded`} src={product.image} alt="Product Image" width={100} height={100} />
            </div>

            <div className="flex flex-row justify-between w-2/3">
            <div className={`flex flex-col justify-evenly mr-2`}>
                <h1><span className="font-bold">Title:</span>{product.title}</h1>
                <p><span className="font-bold">Price:</span> $ {product.price}</p>
            </div>
            {
                page === 'home' ? (
                <button className={`rounded-md bg-secondary p-2 h-fit`}
                    onClick={() => router.push(`products/${encodeURIComponent(product.id)}`, undefined) }>
                    View
                </button>
                ) : (
                <button className={`rounded-md bg-[red] p-2 h-fit`}
                    onClick={() => removeFromCart() }>
                    Romove
                </button>
                )
            }
            </div>
        </li>
    );
}
