import { MdStorefront } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";


import SearchBar from "./SearchBar"


export default function Header({ displayCartModal }) {
    return (
        <header className="bg-rose-700 w-full flex justify-center items-center" >
            <div className="max-w-screen-xl w-full py-4 flex justify-between">
                <Link to="/" className="flex items-center">
                    <MdStorefront size={'2rem'} />
                    <h1 className="text-3xl">Super Store</h1>
                </Link>
                <SearchBar />
                <button onClick={displayCartModal}>
                    <MdShoppingCart size={'2rem'} />
                </button>
            </div>
        </header>
    )
}
