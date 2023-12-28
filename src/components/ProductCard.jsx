import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";


const Rating = ({ rating }) => {
    const rate = rating.rate
    const count = rating.count
    const stars = []

    for (let i = 0; i < Math.floor(rate); i++) {
        stars.push(<MdOutlineStar key={i} color={"orange"} />)
    }

    if (rate % 1 > 0.5) {
        stars.push(<MdOutlineStarHalf key={'half'} color="orange" />)
    }

    let length = stars.length
    if (stars.length - 5 < 0) {
        for (let j = 0; j < (5 - length); j++) {
            stars.push(<MdOutlineStarBorder key={'empty' + j} color="orange" />)
        }
    }

    return (
        <div>
            <div className="flex items-center">
                {stars}
                <span className="ml-1">&#40; {count} &#41;</span>

            </div>

        </div>
    )
}


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
