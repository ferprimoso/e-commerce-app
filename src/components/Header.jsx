import { MdStorefront } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";


import SearchBar from "./SearchBar"


export default function Header({ displayCartModal, cartQuantity }) {
    return (
        <header className="bg-rose-700 w-full flex justify-center items-center shadow-md sticky top-0" >
            <div className="text-white max-w-screen-xl w-full py-4 px-3 flex justify-between">
                <Link to="/" className="flex items-center">
                    <MdStorefront size={'2rem'} />
                    <h1 className="text-3xl font-bold">SuperStore</h1>
                </Link>
                <SearchBar />

                <button className="flex items-center" onClick={displayCartModal}>
                    {cartQuantity > 0 &&
                        <div className="mr-2 text-xl font-bold">{cartQuantity}</div>
                    }
                    <MdShoppingCart size={'2rem'} />
                </button>
            </div>
        </header>
    )
}
