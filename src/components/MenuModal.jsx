import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import SearchBar from "./SearchBar";

export default function MenuModal({ menuModalVisible, hideMenuModal }) {

    return (
        <>
            {menuModalVisible &&
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/80" onClick={hideMenuModal} />
            }

            <div className={`fixed inset-y-0 left-0 w-96 h-full bg-white p-8  ${menuModalVisible ? 'fade-in-menu' : 'fade-out-menu'} `}>
                <div className="cart-content h-full flex flex-col">

                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-4xl">Menu</h1>
                        <button onClick={hideMenuModal}>
                            <MdClose size={'2rem'} />
                        </button>
                    </div>
                    <div>
                        <SearchBar />
                        <ul className="font-medium text-xl flex flex-col items-start">
                            <li>
                                <Link to="/" className="flex items-center" onClick={hideMenuModal}>
                                    <a className="block py-2 " aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/store" className="flex items-center" onClick={hideMenuModal}>
                                    <a href="#" className="block py-2 " >Shop</a>
                                </Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </>
    )
}
