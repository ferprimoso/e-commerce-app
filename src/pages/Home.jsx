import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="flex flex-col">
            <img className="absolute -z-50 top-0 h-96 w-full object-cover brightness-50 " src="/hero-image.jpg" alt="Girl Shopping" />
            <div className="w-full  py-4">
                <div className="mx-auto max-w-screen-xl">
                    <div className="mb-20 px-10 flex justify-between items-center flex-col md:flex-row gap-8">
                        <div>
                            <h1 className="text-white text-3xl md:text-7xl font-bold">
                                <span className="text-rose-500">Everything</span>
                                <br />
                                <span>you need</span>
                                <br />
                                <span>and much more</span>
                            </h1>

                        </div>

                        <Link to={'/store'}>
                            <button className="rounded-xl bg-rose-700 p-8 hover:bg-rose-900">
                                <span className="text-white text-4xl font-bold">Shop Now</span>
                            </button>
                        </Link>

                    </div>

                    <div className="p-10 md:pd-16 flex justify-around items-center flex-col md:flex-row gap-8">
                        <div className="shrink-0">
                            <img className="size-46 md:size-96 rounded-full object-cover" src="/shopping-cart.jpg" alt="Shopping Cart" />
                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <h1 className="text-3xl md:text-5xl font-bold">The <span className="text-rose-500">Best</span> Products is Here</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus quos pariatur, autem tenetur, incidunt, non unde odio voluptatibus sequi dignissimos atque suscipit? Soluta nulla, possimus est eum quam expedita?</p>

                            <Link to={'/store'}>
                                <button className="mt-4 w-46 rounded-xl bg-rose-700 p-8 hover:bg-rose-900">
                                    <span className="text-white text-4xl font-bold">Shop Now</span>
                                </button>
                            </Link>

                        </div>

                    </div>

                </div>



            </div>
        </main>
    )
}
