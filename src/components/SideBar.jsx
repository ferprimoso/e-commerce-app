export default function SideBar({ changeCategory }) {
    return (
        <div className="basis-1/5 bg-slate-100 rounded-lg p-6 h-full sticky top-20">
            <h1 className="text-black text-3xl font-bold mb-4">Categories</h1>
            <ul className="text-black text-xl">
                <li><button className="w-full text-left alig hover:bg-slate-300 transition-all 1s ease" onClick={() => changeCategory("")}>All</button></li>
                <li><button className="w-full text-left alig hover:bg-slate-300 transition-all 1s ease" onClick={() => changeCategory("/category/men's clothing")}>Men&apos;s Clothes</button></li>
                <li><button className="w-full text-left alig hover:bg-slate-300 transition-all 1s ease" onClick={() => changeCategory("/category/women's clothing")}>Women&apos;s Clothes</button></li>
                <li><button className="w-full text-left alig hover:bg-slate-300 transition-all 1s ease" onClick={() => changeCategory("/category/jewelery")}>Jewelery</button></li>
                <li><button className="w-full text-left alig hover:bg-slate-300 transition-all 1s ease" onClick={() => changeCategory("/category/electronics")}>Electronics</button></li>
            </ul>
        </div>
    )
}
