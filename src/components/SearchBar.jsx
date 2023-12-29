
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



export default function SearchBar({ hideMenuModal }) {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();


    const handleSearch = (e) => {
        e.preventDefault();

        if (searchQuery === "") return;

        navigate(`/store?search=${encodeURIComponent(searchQuery)}`);
        setSearchQuery('')
    }

    return (
        <div className="text-black" >
            <form action="submit" className="flex justify-between items-center" onSubmit={handleSearch} >
                <input
                    type="text"
                    placeholder="Search a item"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="outline-none rounded-l-md p-1"
                />
                <button className="bg-white rounded-r-lg" type="submit" onClick={hideMenuModal}>
                    <MdSearch size={'2rem'} />

                </button>


            </form>
        </div>

    )
}
