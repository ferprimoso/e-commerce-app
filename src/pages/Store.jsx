import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SideBar from '../components/SideBar';
import ProductList from '../components/ProductList';

export default function Store() {
  const [category, setCategory] = useState('');
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams?.get('search');

  const changeCategory = (category) => {
    setCategory(category);
  };

  return (
    <div className='mx-auto max-w-screen-xl '>
      <div className='flex flex-col md:flex-row min-h-screen pt-4 md:pt-10'>
        <SideBar changeCategory={changeCategory} />
        <ProductList category={category} searchTerm={searchTerm} />
      </div>
    </div>
  );
}
