
import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import BookCart from './BookCart/BookCart';



const Category = () => {
   
    const categories = useLoaderData();
    const navigation = useNavigation();

  //  let categoryName;
    // console.log(categories[0].category_id)
  //  if(categories[0].category_id === "1" && categories.length>0)
  //  {
  //   categoryName= 'Nobel BooKs'
  //  }
  // else if(categories[0].category_id === "2" && categories.length>0)
  //  {
  //   categoryName= 'Poetry Books'
  //  }
  // else if(categories[0].category_id === "3"&& categories.length>0)
  //  {
  //   categoryName= 'Biograpy BooKs'
  //  }
  // else if(categories[0].category_id === "4"&& categories.length>0)
  //  {
  //   categoryName= 'Crime'
  //  }
  // else if(categories[0].category_id === "5"&& categories.length>0)
  //  {
  //   categoryName= 'Adventure stories'
  //  }
  // else if(categories[0].category_id === "6"&& categories.length>0)
  //  {
  //   categoryName= 'Academic'
  //  }
  // else if(categories[0].category_id === "7"&& categories.length>0)
  //  {
  //   categoryName= 'Science fiction'
  //  }
  // else if(categories.length>0 && categories[0].category_id === "8")
  //  {
  //   categoryName= 'Literature'
  //  }
  //  else
  //  {
  //    categoryName='Other'
  //  }
 

    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }

    
   
    return (
        <div className='w-11/12 mx-auto'>
        
            {
              categories.length === 0?
              <h1 className='text-center h-[400px] mt-12 text-2xl text-white'>NO Product</h1>  
              :
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 my-12'>
            {
              categories.map(category => <BookCart
              key={category._id}
              category={category}
              ></BookCart>)  
            }
            </div> 
            } 

     
       
        </div>
        
    );
};

export default Category;