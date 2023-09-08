import React from 'react'
import '../App.css'

import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
const Home = ({array ,productplus,productminus,sumOfCount}) => {
  console.log(sumOfCount,'home')
  return (
    <div className='content'>
    {array.map(item=>(
    <div className='product' key={item.id}>
      <img className='image' src={process.env.PUBLIC_URL + item.productimage}alt="Percent" />
        <h2 className='product-company'>{item.productcompany}</h2>
        <p className='product-type'>{item.producttype}</p>
        <div className='priceandcount'>
            <h5 className='product-price'>र{item.price}</h5>
            <div className='add-count'>
              <AiOutlinePlus onClick={()=>productplus(item.id)} className='addminus'></AiOutlinePlus>
              <h5 className='product-count' >{item.count}</h5>
              <AiOutlineMinus onClick={()=>productminus(item.id)} className='addminus'></AiOutlineMinus>
            </div>
        </div>   
    </div>
    ))}

    </div>
  )
}

export default Home