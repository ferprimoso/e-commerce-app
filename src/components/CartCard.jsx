export default function CartCard({ product }) {
    return (
        <div className="h-40 flex justify-start shadow-lg rounded-lg p-4 gap-4">
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
        </div>
    )
}
