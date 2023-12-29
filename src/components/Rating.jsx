import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";


export default function Rating({ rating }) {
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
