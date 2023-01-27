import { Product } from "./layout/MainLayout"
import ProductCard from "./ProductCard"

export default function Home ({ result, }: { result: Product[] | null}) {
    return (
        <div className={`bg-primary w-[100vw] mt-24`}>
          <ul className={'flex flex-col items-center'}>
            {result ? result!.map((product, idx, _) => {
              return <ProductCard key={product.id} product={product} page={'home'} removeFromCart={null} />
            }) : null}
          </ul>
        </div>
    );
}