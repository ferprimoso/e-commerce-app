import { useState, useEffect } from "react"
import ProductCard from "./ProductCard";

export default function ProductList() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products?limit=16`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [])

    return (
        <div className="flex flex-wrap justify-between basis-4/5 ">

            {loading &&
                <h1>Loading</h1>

            }
            {!loading &&
                data.map(data => <ProductCard key={data.id} product={data} />)





            }



        </div>
    )
}
