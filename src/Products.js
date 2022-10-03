import React from "react";
import Count from './Count'
function Products({anyWordProducts}){
    return(
        <div className='products'>
            {anyWordProducts.map((element=>{
                const{id,name,price,image}=element;

                
            
                return(
                    
                    <div key={id} className='product-card'>
<div >

<img src={image} width="100%" height="auto" alt="pictures"/>
                    <h3>{name}</h3>
                    
                    <div className="sum">
                    <div><Count/></div>
                     <img className="basket" src="https://img.icons8.com/ios-filled/344/shopping-basket-2.png"  width='24px' alt="orange"/>
                    </div>

                    <h4>{price}</h4>
                     </div>
                        </div>
                    
                )
            }))}
        </div>
    )
}
export default Products;