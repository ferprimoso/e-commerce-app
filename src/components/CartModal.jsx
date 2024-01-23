import { useMemo } from "react";
import { MdClose } from "react-icons/md";

import CartCard from "./CartCard"


export default function CartModal({ cart, cartModalVisible, hideCartModal, removeFromCart, addOneProduct, removeOneProduct }) {

    const totalPrice = useMemo(() => {
        return cart.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
    }, [cart]);


    return (
        <>
            {cartModalVisible &&
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/80" onClick={hideCartModal} />
            }

            <div className={`fixed inset-y-0 right-0 w-96 h-full bg-white p-8  ${cartModalVisible ? 'fade-in' : 'fade-out'} `}>
                <div className="cart-content h-full flex flex-col justify-between ">

                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-4xl">Shopping Cart</h1>
                        <button onClick={hideCartModal}>
                            <MdClose size={'2rem'} />
                        </button>
                    </div>


                    <div className="overflow-hidden flex h-full">
                        <div className="h-full flex flex-col justify-start overflow-y-auto flex-auto">
                            {(cart.length === 0) &&
                                <span>no products yet...</span>

                            }
                            {cart.map(product =>
                                <CartCard key={product.id}
                                    product={product}
                                    removeFromCart={removeFromCart}
                                    addOneProduct={addOneProduct}
                                    removeOneProduct={removeOneProduct}
                                />
                            )}
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <span className="text-4xl mb-4">Total: $ {totalPrice.toFixed(2)}</span>
                        <button className="rounded-lg bg-rose-700 p-4 hover:bg-rose-900">
                            <span className="text-white font-bold">Checkout</span>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
