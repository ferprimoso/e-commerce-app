import SideBar from "../components/SideBar"
import ProductList from "../components/ProductList"


export default function Store() {
    return (
        <div className="mt-20 flex gap-4">
            <SideBar />
            <ProductList />
        </div>
    )
}
