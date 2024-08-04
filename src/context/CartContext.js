// import { createContext, useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// export const CartContext = createContext();
// export const CartProvider = ({ children }) => {
//   const [carts, setCarts] = useState([]);
//   const [totalPrice, setTotalPrice] = useState([]);

//   useEffect(() => {
//     loadCartItems();
//   }, []);
//   const loadCartItems = async () => {
//     let carts = await AsyncStorage.getItem("carts");
//     carts = carts ? JSON.parse(carts) : [];
//     setCarts(carts);
//     totalSum(carts);
//   };

//   const addToCart = async (item) => {
//     const itemExist = carts.findIndex((cart) => cart.id === item.id);
//     if (itemExist === -1) {
//       const newCartItems = [...carts, item];
//       await AsyncStorage.setItem("carts", JSON.stringify(newCartItems));
//       setCarts(newCartItems);
//       totalSum(newCartItems);
//     }
//   };

//   const deleteItemFromCart = async (item) => {
//     const newItems = carts.filter((cart) => cart.id !== item.id);
//     await AsyncStorage.setItem("carts", JSON.stringify(newItems));
//     setCarts(newItems);
//     totalSum(newItems);
//   };
//   const totalSum = (carts) => {
//     const totalSum = carts.reduce((amount, item) => amount + item.price, 0);
//     setTotalPrice(totalSum);
//   };
//   const value = { carts, addToCart, totalPrice, deleteItemFromCart };
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    let cartItems = await AsyncStorage.getItem("cart");
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    setCartItems(cartItems);
    calculateTotalPrice(cartItems);
  };

  const addToCartItem = async (item) => {
    let cartItems = await AsyncStorage.getItem("cart");
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    let isExist = cartItems.findIndex((cart) => cart.id === item.id);
    if (isExist === -1) {
      cartItems.push(item);
      calculateTotalPrice(cartItems);
      setCartItems(cartItems);
      await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  const deleteCartItem = async (id) => {
    let cartItems = await AsyncStorage.getItem("cart");
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    cartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(cartItems);
    calculateTotalPrice(cartItems);
    await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const calculateTotalPrice = (cartItems) => {
    let totalSum = cartItems.reduce((total, item) => total + item.price, 0);
    totalSum = totalSum.toFixed(2);
    setTotalPrice(totalSum);
  };
  const value = {
    cartItems,
    addToCartItem,
    deleteCartItem,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};