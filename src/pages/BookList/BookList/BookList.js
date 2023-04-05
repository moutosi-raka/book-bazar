import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import BookCart from '../../Category/BookCart/BookCart';
import Loading from '../../Loading/Loading';
import BookListBanner from '../BookListBanner/BookListBanner';



const BookList = () => {
  const { setBookProduct } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const navigation = useNavigation();

  useEffect( ()=>{
    fetch(`http://localhost:5000/api/category/list?search=${search}&page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => {
          setCategories(data.products)
          setCount(data.count)
        })
  }, [search, page, size])

  const pages = Math.ceil(count / size);
  console.log('page', pages, count)

  const handleSearch = event =>{
    event.preventDefault();
    setSearch(event.target.search.value)
    console.log(event.target.search.value)
    
  }

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }
  return (
    <div>
      <BookListBanner
        handleSearch={handleSearch}
      ></BookListBanner>
      <div className='w-11/12 mx-auto'>
        {
          categories.length === 0 ?
            <h1 className='text-center h-[400px] mt-12 text-2xl'>NO Product</h1>
            :
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4 my-12'>
              {
                categories.map(category => <BookCart
                  key={category._id}
                  category={category}
                  setBookProduct={setBookProduct}

                ></BookCart>)
              }
            </div>
        }

      <div className='flex justify-end my-3'>
        <p className='text-white'>Currently Selected Pages: {page}</p>
      </div>
      <div className='flex justify-end mb-5'>
      <div className="btn-group">
        {
          [...Array(pages).keys()].map(number => <button 
            key={number} 
            className={page === number ? "btn btn-active" : "btn"}
            onClick={()=> setPage(number)}
            >{number}</button>)
        }

      </div>  
        <select onChange={ e => setSize(e.target.value)} className="select select-bordered ml-5">
          <option selected value='5'>5</option>
          <option  value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>
       
     
      </div>
  
      </div>
    </div>
  );
};

export default BookList;