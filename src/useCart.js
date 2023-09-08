import { useState } from "react";
const useCart = () => {
  // const [toggle, setToggle] = useState(true);
  // const [cart, setCart] = useState(false);
  // function cartclick() {
  //   setCart(!cart)
  //   setToggle(cart);
  //   console.log(toggle,'rr');
  // }
  const [array, setArray] = useState([
    {
      id: 1,
      productcompany: "Levis",
      producttype: "T-shirt",
      productimage: "./img/dark-green-t-shirt.jpg",
      price: 500,
      count: 0,
    },
    {
      id: 2,
      productcompany: "Levis",
      producttype: "Pants",
      productimage: "./img/eb9aaf39-7462-44c9-bd86-274cfb1d38fb_1.1440eb2973046b94785da8e1d9c4108f.jpeg",
      price: 800,
      count:0,
    },
    {
      id: 3,
      productcompany: "Levis",
      producttype: "Pants",
      productimage: "./img/man-wearing-brown-pants-close-up.jpg",
      price: 600,
      count: 0,
    },
    {
      id: 4,
      productcompany: "Levis",
      producttype: "Denim-shirt",
      productimage: "./img/OIP (7).jpg",
      price: 1000,
      count: 0,
    },
    {
      id: 5,
      productcompany: "Levis",
      producttype: "T-shirt",
      productimage: "./img/OIP (8).jpg",
      price: 400,
      count:0,
    },
    {
      id: 6,
      productcompany: "Levis",
      producttype: "T-shirt",
      productimage: "./img/OIP (9).jpg",
      price: 300,
      count: 0,
    },
    {
      id: 7,
      productcompany: "Levis",
      producttype: "Formal-shirt",
      productimage: "./img/OIP (10).jpg",
      price: 850,
      count: 0,
    },
    {
      id: 8,
      productcompany: "Levis",
      producttype: "Formal-Pants",
      productimage: "./img/OIP (11).jpg",
      price: 999,
      count: 0,
    },
    {
      id: 9,
      productcompany: "Levis",
      producttype: "Formal-Pants",
      productimage: "./img/OIP (12).jpg",
      price: 600,
      count: 0,
    }
  ]);
  const filteredProducts = array.filter((array) => array.count > 0);

  const productplus = (id) => {
    const updatedArray = array.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count +1};
      }
      return item;
    });
    setArray(updatedArray);
  };

  const productminus = (id) => {
    const updatedArray = array.map((item) => {
      if (item.id === id && item.count > 0) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setArray(updatedArray);
  };
  
  // const itemremove=(idtoremove)=>{
  //   // const updatedItems = array.filter((k) => k.count === counttoremove );
  //   //const productIdToUpdate = idtoremove; 
  //   const newCount = 0; 
  //   const updatedItems = array.find((product) => product.id === idtoremove);  
  //   if (updatedItems) {
  //     updatedItems.count = newCount;
  //   }
  //   setArray(updatedItems);
  // };

  const itemremove = (idtoremove) => {
    const updatedArray = array.map((item) => {
      if (item.id === idtoremove) {
        return { ...item, count: item.count = 0};
      }
      return item;
    });
    setArray(updatedArray);
  };

  const sumOfCount = array.reduce((total, array) => total + array.count, 0);
  const sumOftotalproduct = array.reduce((total, array) => total + array.count*array.price, 0);

  // const sumOfoneproduct=array.map((item)=>(item.reduce((total, array) => total + array.count*array.price,0)))
  // console.log(sumOfoneproduct)

  // const productsWithTotalPrice = array.map((product) => ({...product,total: product.price * product.count})); 
  // console.log(productsWithTotalPrice);

  array.forEach((product) => {
    product.total = product.price * product.count;
  });
  console.log(array);

  return {array,setArray,productplus,productminus,filteredProducts,sumOfCount,itemremove,sumOftotalproduct};
};
export default useCart;
