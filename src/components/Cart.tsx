import { Product } from "./layout/MainLayout"
import ProductCard from "./ProductCard"

export default function Cart ({ result, removeFromCart }: { result: Product[] | null, removeFromCart: any}) {
    return (
        <div className={`bg-primary w-[100vw] mt-24`}>
          <ul className={'flex flex-col items-center'}>
            {result ? result!.map((product, idx, _) => {
              return <ProductCard key={product.id} product={product} page={'cart'} removeFromCart={removeFromCart} />
            }) : null}
          </ul>
        </div>
    );
}