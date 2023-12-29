import { Link } from "react-router-dom";
import Rating from "./Rating";


export default function ProductCard({ product }) {


    return (
        <Link className="flex flex-col p-2 md:p5 items-center" to={`/product/${product.id}`}>
            <div className="mb-4">
                <img className="h-48 w-full object-contain" src={product.image} alt={product.title} />
            </div>
            <h1 className="font-medium">{product.title}</h1>
            <Rating rating={product.rating} />
            <h2 className="font-bold mt-auto text-xl">$ {product.price}</h2>
        </Link>
    )
}
