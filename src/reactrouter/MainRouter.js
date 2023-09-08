import React from 'react'
import Home from './Home'
import Cart from './Cart'
import { FaShopify, FaCartShopping } from "react-icons/fa6";
import { Routes,Route ,Link} from 'react-router-dom'
function MainRouter({array,setArray,productplus,productminus,filteredProducts,sumOfCount,itemremove,sumOftotalproduct}) {
  return (
    <div className="Appdiv">
    <div className="navbar">    
      <h2 className="shop">
      <Link to="/"> <FaShopify /></Link>
        ShOp
      </h2>
      <div className="cart">
      <Link to="cart"><FaCartShopping className="cart-page"  /></Link>
        <h3 className="cart-item-number">{sumOfCount}</h3>
      </div>
    </div>
    <div>
    <Routes>
     <Route path="/"element={<Home array={array}  productplus={productplus} productminus={productminus} sumOfCount={sumOfCount}/>} />
     <Route path="cart" element={<Cart productplus={productplus} productminus={productminus} filteredProducts={filteredProducts} sumOfCount={sumOfCount} itemremove={itemremove} sumOftotalproduct={sumOftotalproduct}/>}/>
     </Routes>
    </div>
    <footer className="footer">
        
        </footer>
     
      </div>
  )
}

export default MainRouter