import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export default function Product({ addToCart }) {

    const { id } = useParams()
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/${id}`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setProduct(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [])

    return (
        <div>
            {error &&
                <h1>error</h1>
            }
            {loading &&
                <h1>Is loading!</h1>
            }
            {product &&
                <div className="mt-10 flex flex-col md:flex-row">
                    <div className="basis-1/2">
                        <img className="w-80" src={product.image} alt={product.name} />
                    </div>
                    <div className="basis-1/2">
                        <h1 className="text-4xl">{product.title}</h1>
                        <span className="text-4xl">${product.price}</span>

                        <p className="text-2xl"> {product.description}</p>

                        <button className="bg-black text-white" onClick={() => addToCart(product)}>
                            Add to cart
                        </button>

                    </div>

                </div>

            }


        </div>
    )
}
