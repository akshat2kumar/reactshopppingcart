import React from 'react'
import { MdOutlineRemoveShoppingCart  } from "react-icons/md";
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import{RxCross1}from "react-icons/rx";
const Cart = ({productplus,productminus,filteredProducts,sumOfCount,itemremove,sumOftotalproduct}) => {
  

  return (
    
    sumOfCount?(<div className="cart-content">
    {filteredProducts.map(item=>(
     
     <div className='cartproduct' key={item.id}>
       <img className='cartimage' src={process.env.PUBLIC_URL + item.productimage}alt="Percent" />
       
        <div className="cartsidecontent">
        <RxCross1 className="close" onClick={() => itemremove(item.id)}></RxCross1>
         <h2 className='cartproduct-company'>{item.productcompany}</h2>
         <p className='cartproduct-type'>{item.producttype}</p>
         
         <div className='cartpriceandcount'>
             <h5 className='cartproduct-price'>र{item.price}</h5>
             
             <div className='cartadd-count'>
               <AiOutlinePlus onClick={()=>productplus(item.id)} className='addminus'></AiOutlinePlus>
               <h5 className='product-count' >{item.count}</h5>
               <AiOutlineMinus onClick={()=>productminus(item.id)} className='addminus'></AiOutlineMinus>
             </div>
         </div>
         <h5 className='cartproductoneprice'>Total: र {item.total}</h5>
         </div>
     </div>
     
     ))}
     <div  className='cartproduct-totalprice'> 
           <h5 >Total price:र{sumOftotalproduct}</h5>
      </div>
     </div>):(<div className="empty">
      <h1>Cart is Empty</h1>
      <MdOutlineRemoveShoppingCart className="null" ></MdOutlineRemoveShoppingCart>
      </div>)
      
    )}
  


export default Cart