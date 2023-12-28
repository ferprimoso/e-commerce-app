import { useState, useEffect } from "react"
import ProductCard from "./ProductCard";

export default function ProductList({ category }) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [option, setOption] = useState('sort');


    function sortData(option) {
        switch (option) {
            case 'popular':
                setData(data.sort((a, b) => b.rating.rate - a.rating.rate))
                break;
            case 'a-z':
                setData(data.sort((a, b) => {
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (a.title > b.title) {
                        return 1;
                    }
                    return 0;
                }))
                break;
            case 'z-a':
                setData(data.sort((a, b) => {
                    if (a.title < b.title) {
                        return 1;
                    }
                    if (a.title > b.title) {
                        return -1;
                    }
                    return 0;
                }))
                break;
            case 'low-high':
                setData(data.sort((a, b) => a.price - b.price))
                break;
            case 'high-low':
                setData(data.sort((a, b) => b.price - a.price))
                break;
            default:
                break;
        }

    }

    function handleChange(e) {
        setOption(e.target.value)
        sortData(e.target.value)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const response = await fetch(
                    `https://fakestoreapi.com/products` + category
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
        console.log('fetched');
    }, [category])

    return (

        <div className="flex flex-wrap justify-between basis-4/5">

            {loading &&
                <h1>Loading</h1>

            }
            {!loading &&

                <div className="flex flex-col">

                    <div className="px-6 flex justify-between items-center">
                        <span className="font-medium">{data.length} products</span>
                        <select className="p-2 rounded-lg" name="sort" id="sort" value={option} onChange={handleChange}>
                            <option value="sort" disabled hidden>Sort</option>
                            <option value="popular">More popular</option>
                            <option value="a-z">A-Z</option>
                            <option value="z-a">Z-A</option>
                            <option value="low-high">Lowest price to highest</option>
                            <option value="high-low">Highest price to lowest</option>
                        </select>
                    </div>

                    {/* <button onClick={() => console.log(category)}>hii</button> */}


                    <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-4" >

                        {data.map(data => <ProductCard key={data.id} product={data} />)}

                    </div>





                </div>




            }



        </div>
    )
}
