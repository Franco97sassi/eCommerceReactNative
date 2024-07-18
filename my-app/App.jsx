import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen';
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="HOME" component={HomeScreen} />
    <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailScreen} />

  </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer> 
      {/* <Text>App</Text> */}
       <Tab.Navigator screenOptions={{
        headerShown:false,tabBarShowLabel:false,tabBarActiveTintColor:"#E96E6E"
      }}  >
        <Tab.Screen
       
      name="HOME" component={HomeScreen}  options={{
        tabBarIcon:({size,focused,color})=>{
          return <Entypo name={"home"} size={size} color={color} />
        }
      }}/>
        <Tab.Screen name="REORDER" component={SettingsScreen} options={{
        tabBarIcon:({size, color})=>{
          return <MaterialIcons name={"reorder"} size={size} color={color} />
        }
      }}
        
        />
        <Tab.Screen name="CART" component={SettingsScreen} options={{
        tabBarIcon:({size, color})=>{
          return <MaterialCommunityIcons name={"cart"} size={size} color={color} />
        }
      }}/>
        <Tab.Screen name="ACCOUNT" component={SettingsScreen} options={{
        tabBarIcon:({size, color})=>{
          return <FontAwesome6 name={"user"} size={size} color={color} />
        }
      }}/>

      </Tab.Navigator>  
      </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})