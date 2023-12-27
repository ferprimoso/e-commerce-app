import { Link } from "react-router-dom";

import { MdDeleteOutline } from "react-icons/md";


export default function CartCard({ product, removeFromCart, removeOneProduct, addOneProduct }) {
    return (
        <div className="h-36 flex justify-start shadow-lg rounded-lg p-4 gap-4">
            <div className="shrink-0">
                <img className="w-12 md-w-20 max-w-full" src={product.image} alt={product.title} />
            </div>
            <div className="flex flex-col justify-between">
                <div>
                    <Link to={`/product/${product.id}`}>
                        <h2 className="leading-4 line-clamp-3 md:line-clamp-none">{product.title}</h2>
                    </Link>
                </div>

                <div className="flex justify-between">
                    <h2 className="font-bold">$ {product.price}</h2>
                    <h1>
                        <button onClick={() => removeOneProduct(product.id)}>-</button>

                        {product.quantity}

                        <button onClick={() => addOneProduct(product.id)}> + </button>

                    </h1>
                    <button onClick={() => removeFromCart(product.id)}>
                        <MdDeleteOutline />
                    </button>
                </div>
            </div>
        </div>
    )
}
