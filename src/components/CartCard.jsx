import { Link } from 'react-router-dom';

import { MdDeleteOutline, MdAdd, MdRemove } from 'react-icons/md';

export default function CartCard({
  product, removeFromCart, removeOneProduct, addOneProduct,
}) {
  return (
    <div className='h-36 flex shadow-md rounded-lg p-4 gap-4 mb-4'>
      <div className='shrink-0'>
        <img className='w-20 max-w-full h-20 object-contain' src={product.image} alt={product.title} />
      </div>
      <div className='w-full flex flex-col justify-between gap-y-5'>
        <div>
          <Link to={`/product/${product.id}`}>
            <h2 className='leading-4 line-clamp-3 md:line-clamp-none'>{product.title}</h2>
          </Link>
        </div>

        <div className='flex justify-between items-center '>
          <h2 className='font-bold'>
            $
            {product.price}
          </h2>
          <div className='flex items-center gap-2'>

            <button type='button' aria-label='Remove one product instance' className='bg-slate-100 hover:bg-slate-300 transition-colors duration-150' onClick={() => removeOneProduct(product.id)}>
              <MdRemove size='1.5rem' />
            </button>

            <span className='text-xl'>
              {' '}
              {product.quantity}
            </span>

            <button type='button' aria-label='Add one product instance' className='bg-slate-100 hover:bg-slate-300 transition-colors duration-150' onClick={() => addOneProduct(product.id)}>
              <MdAdd size='1.5rem' />
            </button>

          </div>
          <button type='button' aria-label='Delete all product instances' className=' text-grey-300 hover:text-red-500 transition-colors duration-150' onClick={() => removeFromCart(product.id)}>
            <MdDeleteOutline size='1.5rem' />
          </button>
        </div>
      </div>
    </div>
  );
}
