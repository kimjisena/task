import { type Product } from "./layout/MainLayout";
import ProductDetails from "./ProductDetails";

export default function Product ({ result, addToCart }: { result: Product | null, addToCart: any}) {
    return (
        <div className={`bg-primary w-[100vw] flex flex-col justify-center items-center`}>
            <h1 className='font-bold text-2xl p-4'>Product Details</h1>
            {
                result && <ProductDetails product={result} addToCart={addToCart} />
            }
      </div>
    )
}