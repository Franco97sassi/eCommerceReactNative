// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

// const imageUrl =
//   "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";
// const CardCart = ({item,deleteItemFromCart}) => {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.coverImage} source={{ uri:item.image }} />
//       <View style={styles.cardContent}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.price}> ${item.price}</Text>
//       </View>
//        <View style={styles.circleSizeContainer}>
//      <View style={styles.circle}/>
// <View style={styles.sizeCircleContainer}>
//   <Text style={styles.sizeText}>{item.size}</Text>
// </View>
//      </View>
//      <TouchableOpacity onPress={()=>{deleteItemFromCart(item)}}>  
//      <FontAwesome6 name={"trash"} size={22} color={"#F68CB5"} />
//      </TouchableOpacity>
//     </View>
//   );
// };

// export default CardCart;

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 10,
//     flexDirection: "row",
//   },
//   coverImage: {
//     height: 125,
//     width: "25%",
//     borderRadius:"10% "
//   },
//   cardContent: {
//     flex:1

//   },
//   title:{
//     fontSize:18,
//     color:"#444444",
//     fontWeight:"500"
//   },
//   price:{
//     color:"#797979",
//     marginVertical:10,
//     fontSize:18
//   },
//   circle:{
//     height:32,
//     width:32,
//     borderRadius:16,
//     backgroundColor:"#7094C1"
//   },
//   circleSizeContainer:{
//     flexDirection:"row",
//     marginHorizontal:10
//   },
//   sizeCircleContainer:{
//     backgroundColor:"white",
//     height:32,
//     width:32,
//     borderRadius:16,
//     justifyContent:"center",
//     alignItems:"center",
//     marginLeft:10
//   },
//   sizeText:{
//     fontSize:18,
//     fontWeight:"5000"
//   }
// });

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { fonts } from "../utils/fonts";

const CartCard = ({ item, handleDelete }) => {
  const imageUrl =
    "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.textCircleContainer}>
          <View
            style={[styles.circle, { backgroundColor: item?.color || "red" }]}
          ></View>
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Image
          source={require("../assets/deleteIcon.png")}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 15,
  },
  image: {
    height: 125,
    width: "30%",
    resizeMode: "contain",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: fonts.medium,
    color: "#444444",
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: "#797979",
    marginVertical: 7,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    padding: 5,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  sizeContainer: {
    backgroundColor: "#FFFFFF",
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  sizeText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: fonts.medium,
  },
  textCircleContainer: {
    flexDirection: "row",
  },
  deleteIcon: {
    height: 30,
    width: 30,
    marginTop: 10,
  },
});