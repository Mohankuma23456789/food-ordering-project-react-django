import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

export default function StoreContextProvider(props) {

  const [cartitems, setcartitems] = useState({});

  const addToCart = (itemId) => {
    if (!cartitems[itemId]) {
      setcartitems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartitems[item];
      }
    }

    return totalAmount;
  };

  // Missing function (ADD THIS)
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        totalItems += cartitems[item];
      }
    }
    return totalItems;
  };

  const clearCart = ()=>{

    setcartitems({})

  }


  const contextValue = {
    food_list,
    cartitems,
    setcartitems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    clearCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}