import { MdSearch } from "react-icons/md";


export default function SearchBar() {
    return (
        <div >
            <form action="submit" className="flex justify-between items-center border-2 " onSubmit={() => { }}>
                <input type="text" placeholder="Search a item" className="outline-none rounded-l-md p-1" />
                <button className="bg-white rounded-r-lg">
                    <MdSearch size={'2rem'} />

                </button>


            </form>
        </div>

    )
}
