// import { StyleSheet, Text, View } from "react-native";
// import React, { useContext } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "./src/screen/HomeScreen";

// import Entypo from "react-native-vector-icons/Entypo";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ProductDetailScreen from "./src/screen/ProductDetailScreen";
// import CartScreen from "./src/screen/CartScreen";
// import { CartContext, CartProvider } from "./src/context/CartContext";

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const MyHomeStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown:  false ,
//       }}
//       initialRouteName=""
//     >
//       <Stack.Screen name="HOME" component={HomeScreen} />
//       <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailScreen} />
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <CartProvider>
//       <NavigationContainer>
//          <Tab.Navigator
//           screenOptions={{
//             headerShown: false,
//             tabBarShowLabel: false,
//             tabBarActiveTintColor: "#E96E6E",
//           }}
//           initialRouteName=""
//         >
//           <Tab.Screen
//             name="STACK"
//             component={MyHomeStack}
//             options={{
//               tabBarIcon: ({ size,   color }) => {
//                 return <Entypo name={"home"} size={size} color={color} />;
//               },
//             }}
//           />
//           <Tab.Screen
//             name="REORDER"
//             component={SettingsScreen}
//             options={{
//               tabBarIcon: ({ size, color }) => {
//                 return (
//                   <MaterialIcons name={"reorder"} size={size} color={color} />
//                 );
//               },
//             }}
//           />
//           <Tab.Screen
//             name="CART"
//             component={CartScreen}
//             options={{
//               tabBarIcon: ({ size, color }) => {
//                 const { carts } = useContext(CartContext);
//                 return (
//                   <View style={{ position: "relative" }}>
//                     <MaterialCommunityIcons
//                       name={"cart"}
//                       size={size}
//                       color={color}
//                     />
//                     <View
//                       style={{
//                         height: 14,
//                         width: 14,
//                         borderRadius: 7,
//                         backgroundColor: color,
//                         justifyContent: "center",
//                         alignItems: "center",
//                         position: "absolute",
//                         top: -10,
//                         right: -5,
//                       }}
//                     >
//                       <Text
//                         style={{
//                           fontSize: 10,
//                           color: "white",
//                           fontWeight: "500",
//                         }}
//                       >
//                         {carts?.length}
//                       </Text>
//                     </View>
//                   </View>
//                 );
//               },
//             }}
//           />
//           <Tab.Screen
//             name="ACCOUNT"
//             component={SettingsScreen}
//             options={{
//               tabBarIcon: ({ size, color }) => {
//                 return <FontAwesome6 name={"user"} size={size} color={color} />;
//               },
//             }}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </CartProvider>
//   );
// };

// export default App;

import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import Entypo from "react-native-vector-icons/dist/Entypo";
import ProductDetailsScreen from "./src/screen/ProductDetailsScreen";
import CartScreen from "./src/screen/CartScreen";
import ReorderScreen from "./src/screen/ReorderScreen";
import AccountScreen from "./src/screen/AccountScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartContext, CartProvider } from "./src/context/CartContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ focused, size }) => {
                if (focused) {
                  return (
                    <Image
                      source={require("./src/assets/focused/home.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                } else {
                  return (
                    <Image
                      source={require("./src/assets/normal/home.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                }
              },
            }}
          />
          <Tab.Screen
            name="REORDER"
            component={ReorderScreen}
            options={{
              tabBarIcon: ({ focused, size }) => {
                if (focused) {
                  return (
                    <Image
                      source={require("./src/assets/focused/reorder.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                } else {
                  return (
                    <Image
                      source={require("./src/assets/normal/reorder.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                }
              },
            }}
          />
          <Tab.Screen
            name="CART"
            component={CartScreen}
            options={{
              tabBarIcon: ({ focused, size }) => {
                const { cartItems } = useContext(CartContext);
                if (focused) {
                  return (
                    <View style={{ position: "relative" }}>
                      <Image
                        source={require("./src/assets/focused/shopping_cart.png")}
                        style={{
                          height: size,
                          width: size,
                          resizeMode: "center",
                        }}
                      />
                      <View
                        style={{
                          position: "absolute",
                          right: -3,
                          bottom: 22,
                          height: 14,
                          width: 14,
                          backgroundColor: "#E96E6E",
                          borderRadius: 7,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "white", fontSize: 10 }}>
                          {cartItems.length}
                        </Text>
                      </View>
                    </View>
                  );
                } else {
                  return (
                    <View style={{ position: "relative" }}>
                      <Image
                        source={require("./src/assets/normal/shopping_cart.png")}
                        style={{
                          height: size,
                          width: size,
                          resizeMode: "center",
                        }}
                      />
                      <View
                        style={{
                          position: "absolute",
                          right: -3,
                          bottom: 22,
                          height: 14,
                          width: 14,
                          backgroundColor: "#C0C0C0",
                          borderRadius: 7,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "white", fontSize: 10 }}>
                          {cartItems.length}
                        </Text>
                      </View>
                    </View>
                  );
                }
              },
            }}
          />
          <Tab.Screen
            name="ACCOUNT"
            component={AccountScreen}
            options={{
              tabBarIcon: ({ focused, size }) => {
                if (focused) {
                  return (
                    <Image
                      source={require("./src/assets/focused/account.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                } else {
                  return (
                    <Image
                      source={require("./src/assets/normal/account.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                }
              },
            }}
          />
        </Tab.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;