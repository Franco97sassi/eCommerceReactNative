// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import AntDesign from "react-native-vector-icons/AntDesign";
// import { useNavigation } from '@react-navigation/native';

// const ProductCard = ({item,isLiked,setIsLiked,handleLiked}) => {
//   const navigation=useNavigation()
//   // const [isLiked, setIsLiked] = useState(false)
//    return (
//     <TouchableOpacity onPress={()=>{
//       navigation.navigate("PRODUCT_DETAILS" ,{item});
//     }} style={styles.container}>
//      <Image
//      style={styles.coverImage}
//      source={{uri:item.image}}/>
//        <View style={styles.content}>

//      <Text style={styles.title}> {item.title}</Text>
    
//      <Text style={styles.price}>${item.price}</Text>
// </View>
// <View></View>
// <TouchableOpacity onPress={()=>handleLiked(item)} style={styles.likeContainer}>
//   {item?.isLiked?(
//     <AntDesign name={"heart"} size={20} color={"#E55B5B"}/>

//   ):(
//   <AntDesign name={"hearto"} size={20} color={"#E55B5B"}/>

//   )
// }
//  </TouchableOpacity>
//     </TouchableOpacity>
//   )
// }

// export default ProductCard

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     },
//   coverImage:{
//     height:256,
//     width:"100%",
//     borderRadius:20,
//     marginVertical:10,
//     marginRight:10,
//     marginLeft:10
//   },
//   title:{
//     fontSize:18,
//     color:"#444444",
//     fontWeight:"600"
//   },
//   price:{
//     fontSize:18,
//     color:"#9C9C9C",
//     fontWeight:"600"

//   },
//   content:{
//     paddingLeft:15
//   },
//   likeContainer:{
//     height:34,
//     width:34,
//     backgroundColor:"#FFFFFF",
//     justifyContent:"center",
//     alignItems:"center",
//     borderRadius:17,
//     position:"absolute",
//     top:15,
    
//     right:20,
//   }
// })

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { fonts } from "../utils/fonts";

const ProductCard = ({ item, handleProductClick, toggleFavorite }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleProductClick(item);
      }}
    >
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.likeContainer}>
        <TouchableOpacity
          onPress={() => {
            toggleFavorite(item);
          }}
        >
          {item.isFavorite ? (
            <Image
              source={require("../assets/favoriteFilled.png")}
              style={styles.faviorate}
            />
          ) : (
            <Image
              source={require("../assets/favorite.png")}
              style={styles.faviorate}
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  coverImage: {
    height: 256,
    width: "100%",
    borderRadius: 20,
    position: "relative",
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.regular,
    fontWeight: "700",
    color: "#444444",
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.medium,
  },
  likeContainer: {
    position: "absolute",
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    right: 10,
    top: 10,
  },
  faviorate: {
    height: 20,
    width: 20,
  },
});