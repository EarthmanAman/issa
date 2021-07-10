import React, { Component } from 'react';
import { Dimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import {createAppContainer, createSwitchNavigator, NavigationActions } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';  

import {store} from '../redux/store'
import {Container, Header, Body, Content} from "native-base"

import LOGINSCREEN from "../screens/login"
import REGISTERSCREEN from "../screens/register"
import StartScreen from "../screens/start"

import HomeScreen from "../screens/home"
import ProfileScreen from "../screens/profile"
import ScheduleScreen from "../screens/schedule"

const {height, width} = Dimensions.get('window')

const customDrawerContentComponent = (props) => (

  <View>
    <Header style={{backgroundColor:"lightblue", height:150}}>
      <Body style={{margin:20, width:200, height:60, flexDirection: "row", alignItems:"center", justifyContent:"space-between"}}>
        
          <Image source={require("../assets/login.png")} style={{height:100, width:100, borderRadius:100}}/>
          <TouchableOpacity style={{marginTop:5, width:90, height:30, alignItems:"center", justifyContent:"center", borderRadius:5, backgroundColor:"brown"}}>
            <Text style={{color:"#FFFFFF"}}>Log out</Text>
          </TouchableOpacity>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </View>

)


const mainBottomNavigator = createMaterialBottomTabNavigator(
 {
   Home: {
     screen: HomeScreen,
     navigationOptions: {
       tabBarIcon: ({tintColor})  => (
           <View>
             <Icon style={[{color:tintColor}]} size={27} name={'apps'}/>
           </View>
         )
     }
   },

   
  
   Schedule: {
     screen: ScheduleScreen,
     navigationOptions: {
       tabBarIcon: ({tintColor})  => (
           <View>
             <Icon style={[{color:tintColor}]} size={27} name={'group'}/>
           </View>
         )
     }
   },


   Profile: {
     screen: ProfileScreen,
     navigationOptions: {
       tabBarIcon: ({tintColor})  => (
           <View>
             <Icon style={[{color:tintColor}]} size={27} name={'account-circle'}/>
           </View>
         )
     }
   }, 
 
 },
  
{
   shifting:false,
   labeled:false,
   barStyle: {backgroundColor: '#F0F2FA',},
   activeColor: 'blue',
   inactiveColor: '#a9abaf',
   navigationOptions:({navigation}) =>{
     const {routeName} = navigation.state.routes[navigation.state.index]
     return {
       headerTitle:routeName,
       headerStyle:{elevation:0, backgroundColor:"whitesmoke",},
       headerTitleStyle:{
         textAlign:"center",
         color:"#09200d",
         fontSize: 15,
       }
     }

   } 
 }
);


const HomeStackNavigator= createStackNavigator(
   {
     Tabs:{
       screen:mainBottomNavigator
     },
   },
   {
     defaultNavigationOptions:({navigation}) =>{
       return{
         headerLeft:(
             <Icon 
               name="sort" 
               size={30}
               onPress={() => navigation.openDrawer()} 
               style={{
                 color:"#0e6416",
                 marginLeft: 10,
               }}
              />
           ),
         headerLeftContainerStyle:{marginLeft:10},
         headerStyle: {
           backgroundColor:"#F0F2FA",

           borderBottomWidth: 0,
           elevation: 0,
           shadowOpacity: 0,
           height: 0,
           marginTop: 0,
         },
         
    
       }
     }
   },

  )


const drawerNavigator = createDrawerNavigator(
    {
      Home: {
        screen:HomeStackNavigator
      },

      Schedule: {
        screen:ScheduleScreen
      },

      Profile: {
        screen:ProfileScreen
      },
     
    },
    {
      initialRouteName:"Home",
      drawerPosition:"left",
      
      drawerOpenRoute:"DrawerOpen",
      drawerCloseRoute:"DrawerClose",
      drawerToggleRoute:"DrawerToggle",
      activeColor: 'lightblue',
      inactiveColor: 'black',
    }
  )

const switchNavigator = createAnimatedSwitchNavigator(
    {
      Start: {
        screen: StartScreen
      },
      Login: {
        screen: LOGINSCREEN
      },
      Register: {
        screen: REGISTERSCREEN
      },
      Other: {
        screen: drawerNavigator
      }
    },
    {
      initialRouteName:"Other",
      transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={500}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
    }
  )
const mainAppNavigator = createAppContainer(switchNavigator);

export default mainAppNavigator