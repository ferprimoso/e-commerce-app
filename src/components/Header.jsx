import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { MdStorefront } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";

import { Link } from "react-router-dom";


import SearchBar from "./SearchBar"


export default function Header({ displayMenuModal, displayCartModal, cartQuantity }) {

    const location = useLocation();[]
    const [isInHome, setIsInHome] = useState(false)


    useEffect(() => {

        if (location.pathname === '/') {
            console.log(location.pathname);
            setIsInHome(true)
        }

        return () => {
            setIsInHome(false)
        };
    }, [location.pathname]); // Re-run the effect when the route changes



    return (
        <header className={`${isInHome ? 'bg-transparent ' : 'bg-rose-700  shadow-md sticky'} text-white w-full flex justify-center items-center  top-0`} >
            <div className="max-w-screen-xl w-full py-4 sm:py-0 px-3 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <MdStorefront size={'2rem'} />
                    <h1 className="text-xl md:text-3xl font-medium">SuperStore</h1>
                </Link>


                <div className="hidden lg:block">
                    <SearchBar />
                </div>



                <div className='flex items-center gap-4'>



                    <div className="hidden lg:block w-full  md:w-auto" id="navbar-default">
                        <ul className="font-medium text-xl flex items-center p-4">
                            <li>
                                <Link to="/" className="flex items-center">
                                    <a className="block py-2 px-3" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/store" className="flex items-center">
                                    <a href="#" className="block py-2 px-3" >Shop</a>
                                </Link>
                            </li>
                        </ul>
                    </div>




                    <div className='flex gap-8 items-center font-bold'>
                        <button className="flex items-center" onClick={displayCartModal}>
                            {cartQuantity > 0 &&
                                <div className="mr-2 text-xl font-bold">{cartQuantity}</div>
                            }
                            <MdShoppingCart size={'2rem'} />
                        </button>
                    </div>

                    <button className="block lg:hidden" type="button" aria-controls="navbar-default" aria-expanded="false" onClick={displayMenuModal}>
                        <span className="sr-only">Open main menu</span>
                        <MdMenu size={'2rem'} />
                    </button>

                </div>


            </div>
        </header>
    )
}
