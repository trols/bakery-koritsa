import React from 'react';
import Buttons from './Buttons';
import Products from './Products';
import { useState} from "react";
import { data} from './data';
import FirstPage from './FirstPage';
import Footer from './Footer';


function Home(){
    
const[products,setProducts]=useState(data);
const chosenProd=(searchTerm)=>{
  const newProd=data.filter(element=>element.searchTerm === searchTerm);
  setProducts(newProd);
}


return(
    <div>
    


<FirstPage/>
<div className='heading'><h1>ПРОДУКЦИЯ</h1></div>
<Buttons filteredProd={chosenProd}/>
<Products anyWordProducts={products}/>
<Footer/>
</div>

    )
}
export default Home;