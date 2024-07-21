// import {
//   FlatList,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useContext } from "react";
// import Header from "../components/Header";
// import CardCart from "../components/CardCart";
// import { LinearGradient } from "expo-linear-gradient";
// import { CartContext } from "../context/CartContext";

// const CartScreen = () => {
//   const { carts, totalPrice, deleteItemFromCart } = useContext(CartContext);
//     const handleDeleteItem=async(id)=>{
//       await deleteItemFromCart(id)
//     }
//   return (
//     <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
//       <View style={styles.headerContainer}>
//         <Header isCart={true} />
//       </View>
//       {/* <CardCart />
//       <CardCart /> */}
//       <FlatList
//         data={carts}
//         ListHeaderComponent={<></>}
//          renderItem={({ item }) => (
//           <CardCart item={item} deleteItemFromCart={deleteItemFromCart} />
//         )}
//         ListFooterComponent={
//           <>
//             <View style={styles.priceContainer}>
//               <View style={styles.priceAndTitle}></View>

//               <Text style={styles.text}>Total:</Text>
//               <Text style={styles.text}>${totalPrice}</Text>
//             </View>
//             <View style={styles.priceAndTitle}>
//               <Text style={styles.text}>Shipping:</Text>
//               <Text style={styles.text}> $0.0</Text>
//             </View>
//             <View style={styles.divider} />
//             <View style={styles.priceAndTitle}>
//               <Text style={styles.text}>Grand Total:</Text>
//               <Text style={[styles.text, { color: "black", fontWeight: 700 }]}>
//                 {" "}
//                 ${totalPrice}
//               </Text>
//             </View>
//             {/* showVerticalScrollIndicator={false}
//        contentContainerStyle={{
//         paddingBottom:100
//        }}/>  */}
//             <TouchableOpacity style={styles.checkoutContainer}>
//               <Text>Checkout</Text>
//             </TouchableOpacity>
//           </>
//         }
//       />
//     </LinearGradient>
//   );
// };

// export default CartScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//   },
//   priceAndTitle: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   priceContainer: {
//     marginTop: 40,
//   },
//   text: {
//     color: "#757575",
//     fontSize: 18,
//   },
//   divider: {
//     borderWidth: 1,
//     borderColor: "#COCOCO",
//   },
//   checkoutContainer: {
//     backgroundColor: "#E96E6E",
//     width: "100%",
//     marginVertical: 10,
//     cdius: 10,
//   },
//   buttonText: {
//     fontSize: 25,
//     color: "white",
//     textAlign: "center",
//     padding: 10,
//   },
// });

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
 import Header from "../components/Header";
import CartCard from "../components/CartCard";
import { fonts } from "../utils/fonts";
import { CartContext } from "../context/CartContext";
import { LinearGradient } from "expo-linear-gradient";

const CartScreen = () => {
  const { cartItems, deleteCartItem, totalPrice } = useContext(CartContext);

  const handleDeleteItem = async (id) => {
    await deleteCartItem(id);
  };
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <View style={styles.header}>
        <Header isCart={true} />
      </View>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartCard item={item} handleDelete={handleDeleteItem} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
        ListFooterComponent={
          <>
            <View style={styles.bottomContentContainer}>
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Total:</Text>
                <Text style={styles.priceText}>${totalPrice}</Text>
              </View>
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Shpping:</Text>
                <Text style={styles.priceText}>$0.0</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Grand Total:</Text>
                <Text style={[styles.priceText, styles.grandPriceText]}>
                  ${totalPrice}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          </>
        }
      />
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {},
  flexRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  bottomContentContainer: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  titleText: {
    fontSize: 18,
    color: "#757575",
    fontWeight: "500",
  },
  priceText: {
    fontSize: 18,
    color: "#757575",
    fontWeight: "600",
  },
  divider: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginTop: 10,
    marginBottom: 5,
  },
  grandPriceText: {
    color: "#3C3C3C",
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#E96E6E",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
    fontFamily: fonts.regular,
  },
});