import SideBar from "../components/SideBar"
import ProductList from "../components/ProductList"
import { useState } from "react"

export default function Store() {
    const [category, setCategory] = useState('')

    const changeCategory = (category) => {
        setCategory(category)
    }

    return (
        <div className="flex flex-col justify-center gap-4 md:flex-row min-h-screen pt-4 md:pt-10">
            <SideBar changeCategory={changeCategory} />
            <ProductList category={category} />
        </div>
    )
}
