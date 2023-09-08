import useCart from './useCart';
import "./App.css";
import MainRouter from "./reactrouter/MainRouter";
function App() {
  const{array,setArray,productplus,productminus,filteredProducts,sumOfCount,itemremove,sumOftotalproduct}=useCart();
  return (
      <MainRouter array={array} setArray={setArray} productplus={productplus} productminus={productminus}filteredProducts={filteredProducts} sumOfCount={sumOfCount} itemremove={itemremove} sumOftotalproduct={sumOftotalproduct}/>
  );

}

export default App;
