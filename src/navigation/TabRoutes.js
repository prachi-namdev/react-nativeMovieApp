import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen,DetailScreen } from '../component/index';
import navigationString from '../constants/navigationString';
import {Image} from 'react-native';
import imagePath from '../constants/imagePath';
import DrawerNavigation from '../navigation/Drawer'
const Tab = createBottomTabNavigator();


function TabRoutes(){
    return(
    <Tab.Navigator 
    screenOptions={{headerShown: false, 
        tabBarStyle:{
            backgroundColor:'#E72F49',
            // borderRadius:20,
            position:'absolute',
            // bottom:10,
            // marginHorizontal:12
        }}}
    initialRouteName={navigationString.HomeScreen}>
     <Tab.Screen  
     name={navigationString.HomeScreen} component={HomeScreen}
     options={{ title:"HOME",
     tabBarIcon:({focused}) =>{
       return(
             <Image source={imagePath.icHome} 
             style={{tintColor:focused ? 'black' : 'black',
             height:30,width:30}}
             />
       )
     }
     }} 
      />
     <Tab.Screen 
     options={{title:"DETAIL",tabBarIcon:({focused}) =>{
       return(
         <Image source={imagePath.icDetail} 
         style={{tintColor:focused?'black':'black',
          height:30,width:30}}
          />
       )
     }}} 
     name={navigationString.DetailScreen} component={DetailScreen} />
   </Tab.Navigator>
   
    )
}

export default TabRoutes;