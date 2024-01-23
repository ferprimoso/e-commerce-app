import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';
import Rating from '../components/Rating';

export default function Product({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`,
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        const actualData = await response.json();
        setProduct(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  return (
    <div className='mx-auto max-w-screen-xl min-h-screen md:h-[calc(100vh-108px)] flex p-4'>
      {error
                && <NotFound />}
      {loading
                && <Loading />}
      {product
                && (
                <div className='mt-10 flex flex-col md:flex-row'>
                  <div className='basis-1/2 mx-auto mb-4'>
                    <img className='w-80 h-80 md:w-fit md:h-auto md:px-12' src={product.image} alt={product.name} />
                  </div>
                  <div className='basis-1/2'>
                    <div className='mb-4'>
                      <h1 className='text-4xl '>{product.title}</h1>
                      <Rating rating={product.rating} />

                    </div>

                    <span className='block text-4xl font-bold mb-4'>
                      $
                      {product.price}
                    </span>

                    <p className='block text-xl mb-4'>
                      {' '}
                      {product.description}
                    </p>

                    <button className='mt-4 w-46 rounded-xl bg-rose-700 p-8 hover:bg-rose-900' onClick={() => addToCart(product)}>
                      <span className='text-white text-4xl font-bold'>Add to Cart</span>
                    </button>
                  </div>

                </div>
                )}

    </div>
  );
}
