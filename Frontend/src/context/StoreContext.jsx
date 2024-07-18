import React, { useState, createContext, useEffect } from "react";
export const StoreContext = createContext(null);
import axios from 'axios';

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const url = "http://localhost:3000";
  const [food_list,setFoodList] = useState([]);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itmeInfo = food_list.find((product) => product._id === item);
        totalAmount = totalAmount + itmeInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async()=>{
    const response = await axios.get(url+'/api/food/list');
    setFoodList(response.data.data);
  }

  useEffect(()=>{
    async function loadData(){
      await fetchFoodList();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  },[])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;