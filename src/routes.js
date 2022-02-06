import React from 'react';
import { Image, Dimensions } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from './styles/colors'

import Home from './pages/Home';
import Pedal from './pages/Pedal';
import Equipamentos from './pages/Equipamentos';
import Perfil from './pages/Perfil';
import NewEvent from './pages/NewEvent'
import DrawerNavigator from './pages/MyDrawer'
import ButtonNew from './components/ButtonNew'

var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;

import { Entypo, Feather, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'


import EQUIPAMENTS from './assets/Equipaments.png'
const Tab = createBottomTabNavigator();

export default function Routes({props}) {
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: colors.colorButtom,
                    borderTopColor: colors.transparent,
                    paddingBottom: height * 0.005,
                    paddingTop: height * 0.007,
                    height: width * 0.13,
                }
            }}
            tabBarOptions={{
                activeTintColor: colors.quaternary,
                inactiveTintColor: colors.blind,
            }}
        >
            <Tab.Screen name='Início' component={Home} options={{headerShown: false, tabBarIcon: ({size, color}) => (
                <Entypo name='home' size={size} color={color}/>
            )}}/>

            <Tab.Screen name='Pedal' component={Pedal} options={{headerShown: false, tabBarIcon: ({size, color}) => (
                <Octicons name='location' size={size} color={color}/>
            )}}/>

            {/* <Tab.Screen name='Novo' component={NewEvent} options={{headerShown:false, tabBarLabel: '', tabBarIcon: ({size, color}) => (
               <ButtonNew size={size} color={color}/>
            )}}/> */}

            <Tab.Screen name='Equipamentos' component={Equipamentos} options={{headerShown:false, tabBarIcon: ({size, color}) => (
                <Image source={EQUIPAMENTS} style={{width: size, height: size, tintColor: color}}/>
            )}}/>

            <Tab.Screen name='Perfil' component={DrawerNavigator} options={{headerShown:false, tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons name="face-profile" size={size} color={color} />
            )}}/>

        </Tab.Navigator>
    )
}