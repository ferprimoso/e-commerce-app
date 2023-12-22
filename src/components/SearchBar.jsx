import { MdSearch } from "react-icons/md";


export default function SearchBar() {
    return (
        <form action="submit" className="flex items-center" onSubmit={() => { }}>
            <input type="text" placeholder="Search a item" className="rounded-l-md p-1" />
            <button className="bg-white rounded-r-lg">
                <MdSearch size={'2rem'} />

            </button>


        </form>
    )
}
