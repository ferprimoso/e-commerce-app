import SideBar from "../components/SideBar"
import ProductList from "../components/ProductList"
import { useState } from "react"

export default function Store() {
    const [category, setCategory] = useState('')

    const changeCategory = (category) => {
        setCategory(category)
    }

    return (
        <div className="mt-20 flex gap-4">
            <SideBar changeCategory={changeCategory} />
            <ProductList category={category} />

        </div>
    )
}
