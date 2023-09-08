// import React, { useEffect } from 'react'
import {  AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import useCart from './useCart';
function Condition() {
    const{cart,array ,productplus,productminus}=useCart();
    console.log(cart,"==============")
// useEffect(() => {
// console.log(cart ,"changed")
// }, [cart])

    if(cart===false){
        return(

)}
else{
    return(
<h1>ykt</h1>

)}
}

export default Condition;