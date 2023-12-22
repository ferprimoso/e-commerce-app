import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="w-56 h-300">
                <img className="w-full h-56" src={product.image} alt={product.title} />
                <h1>{product.title}</h1>
                <h2>$ {product.price}</h2>
            </div>
        </Link>
    )
}
