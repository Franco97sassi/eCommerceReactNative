import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Fontisto from "react-native-vector-icons/Fontisto";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json"
const categories=["Trending Now","All","New","Mens","Womens"]
const HomeScreen = () => {
  const [products, setProducts] = useState(data.products)
  const [selectedCategory, setSelectedCategory] = useState("All")
    const [isLiked, setIsLiked] = useState(false)
const handleLiked=(item)=>{
  const newProducts=products.map((prod)=>{
    if(prod.id===item.id){
      return{
        ...prod,
        isLiked:true,
      }
    }
    return prod;
  })
  setProducts(newProducts)
}
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
    <Header />
    <Text style={styles.matchText}>Match your Style!</Text>
    
    
   <View style={{
    flexDirection:"row",
    
   }}>
    </View>
  <FlatList data={[1,2,3,4,5]}
   renderItem={ProductCard}
   numColumns={2} 
   ListHeaderComponent={
    <>
     <View style={styles.inputContainer}>
     <View style={styles.iconContainer}>  
      <Fontisto name={"search"} size={26}  color={"#C0C0C0"} /></View>
      <TextInput style={styles.textInput} placeholder="Search"/>
    </View>
     <FlatList data={categories} 
    renderItem={({item})=>(
      <Category
      item={item}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
    )}
    keyExtractor={(item)=>item}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    />
    </>
   }
   data={products}
   renderItem={({item,index}) =>(
    <ProductCard item={item} isLiked={isLiked}
    handleLiked={handleLiked}  setIsLiked={setIsLiked}/>
   
  )} showsVerticalScrollIndicator={false}
  contentContainerStyle={{
    paddingBottom:150
  }}
   />
     </LinearGradient>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,padding:20
  },
  matchText:{
    fontSize:28,
    color:"#000000",
    marginTop:25
  },
  inputContainer:{
    backgroundColor:"#ffffff",  
    height:48,
    borderRadius:12,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    marginVertical:20,
  },
  textInput:{
    flex:1,
     
  },
  iconContainer:{
    marginHorizontal:15
  }
});
