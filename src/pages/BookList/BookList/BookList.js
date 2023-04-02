import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import BookCart from '../../Category/BookCart/BookCart';
import Loading from '../../Loading/Loading';
import BookListBanner from '../BookListBanner/BookListBanner';



const BookList = () => {
  const { setBookProduct } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState('');
  // const [count, setCount] = useState();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(2);
  // const [pages, setPages] = useState(5);
  const {count} = useLoaderData();
  const navigation = useNavigation();



  // useEffect( ()=>{
  //   setPages(Math.ceil(count / size));
  // },[count,size])
   const pages = Math.ceil(count / size);
 

  const fetchCategories = () => {
    fetch(`http://localhost:5000/api/category/list`)
      .then(res => res.json())
      .then(data => {
        setCategories(data.products)
        // setCount(data.count)
      })
  }



  useEffect(() => {
    if (query === "") {
      fetchCategories();
    }
    else {
      setCategories(categories.filter(category => category.book_name.toLowerCase().includes(query.toLowerCase())));
    }

  }, [query])
  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }
  return (
    <div>
      <BookListBanner
        setQuery={setQuery}
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
        <p className='text-white'>Currently Selected Pages: {page+1}</p>
      </div>
      <div className='flex justify-end mb-5'>
      <div className="btn-group">
        {
          [...Array(pages).keys()].map(number => <button 
            key={number} 
            className={page === number ? "btn btn-active" : "btn"}
            onClick={()=> setPage(number)}
            >{number+1}</button>)
        }
        {/* <button className="btn btn-active">1</button>
        <button className="btn ">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button> */}
      </div>
      </div>
  
      </div>
    </div>
  );
};

export default BookList;