import { MdStorefront } from "react-icons/md";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="mt-8 p-8 w-full bg-black text-slate-200 flex justify-center items-center" >
            <div className="mx-auto max-w-screen-xl w-full flex flex-col md:flex-row justify-between">
                <div className="p-8">
                    <div className="flex">
                        <MdStorefront size={'2rem'} />
                        <h1 className="text-xl md:text-2xl font-medium">SuperStore</h1>
                    </div>
                    <div className="mt-8 w-60">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas corporis minus rerum beatae placeat, saepe sint ex hic, voluptatum ut nihil quaerat aspernatur, dolorem autem fugit incidunt. Perspiciatis, repudiandae voluptatem.
                        </p>


                    </div>

                </div>

                <div className="p-8 w-60">
                    <div className="mb-8">
                        <p>Disclaimer: This website is entirely fictional and created for illustrative purposes only.</p>
                    </div>
                    <button className="flex gap-2 items-center transform hover:scale-110 transition-transform duration-300">
                        <a href="https://github.com/ferprimoso">Made by ferprimoso </a>
                        <FaGithub size={'1.5rem'} />
                    </button>
                </div>

            </div>



        </footer>
    )
}
