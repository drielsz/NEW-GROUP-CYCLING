import React from 'react';
import { Image, Dimensions, View, Platform, useColorScheme} from 'react-native'
import { ImageProfile } from '../styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../styles/colors'

import Home from '../pages/Home';
import Pedal from '../pages/Pedal';
import Equipamentos from '../pages/Equipamentos';
// Images
import EQUIPAMENTS from '../assets/Equipaments.png'

import { Octicons, AntDesign, Ionicons } from '@expo/vector-icons'

var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;

import DrawerNavigator from '../pages/MyDrawer'

const Tab = createBottomTabNavigator();

export default function BottomRoutes({props}) {
    const deviceTheme = useColorScheme()
    return(
        <View style={{flex:1}}>
        {deviceTheme === 'light' ?   
            <Tab.Navigator 
            screenOptions={{      
                tabBarStyle:{
                    backgroundColor: colors.blind,
                    borderTopColor: colors.desc,
                    paddingBottom: height * 0.005,
                    paddingTop: height * 0.007,
                    height: width * 0.13,
                }
            }}
            tabBarOptions={{
                activeTintColor: colors.quaternary,
                inactiveTintColor: colors.colorButtom,
                showLabel: false
            }}
        >
                <Tab.Screen name='Início' component={Home} options={{headerShown: false, tabBarIcon: ({size, color}) => (
                     Platform.OS === 'ios' ? 
                     <Ionicons name="ios-home-outline" size={size} color={color} /> 
                     :
                    <Ionicons name='home-outline' size={size} color={color}/>
                )}}/>

                <Tab.Screen name='Pedal' component={Pedal} options={{headerShown: false, tabBarIcon: ({size, color}) => (
                    <Octicons name='location' size={size} color={color}/>
                )}}/>

                {/* <Tab.Screen name='Novo' component={NewEvent} options={{headerShown:false, tabBarLabel: '', tabBarIcon: ({size, color}) => (
                <ButtonNew size={size} color={color}/>
                )}}/> */}

                <Tab.Screen name='Equipamentos' component={Equipamentos} options={{headerShown:false, tabBarIcon: ({size, color}) => (
                    <AntDesign name="shoppingcart" size={size} color={color} />
                )}}/>

                <Tab.Screen name='Perfil' component={DrawerNavigator} options={{headerShown:false, tabBarIcon: ({size, color}) => (
                   <Image source={{uri: 'https://scontent.fjdo1-2.fna.fbcdn.net/v/t39.30808-6/272898753_1329792957500236_8397756379102866395_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Flu-bKNgpF0AX8ZGuM1&_nc_ht=scontent.fjdo1-2.fna&oh=00_AT9vJ6Lplw-cggkpAQf8NuFbcmliAFW1ibbG2MneYJ1CwQ&oe=6235FA83'}} style={{width: size, height: size, borderRadius: size}}/>
                )}}/>

            </Tab.Navigator> 
        :        
                <Tab.Navigator 
                        screenOptions={{
                            tabBarStyle:{
                                backgroundColor: colors.colorButtom,
                                borderTopColor: colors.transparent,
                                paddingBottom: height * 0.005,
                                paddingTop: height * 0.007,
                                height: width * 0.12,
                            }
                        }}
                        tabBarOptions={{
                            activeTintColor: colors.quaternary,
                            inactiveTintColor: colors.blind,
                            showLabel: false
                        }}
                    >
                    <Tab.Screen name='Início' component={Home} options={{headerShown: false, tabBarIcon: ({size, color}) => (
                        Platform.OS === 'ios' ? 
                        <Ionicons name="ios-home-outline" size={size} color={color} /> 
                        :
                        <Ionicons name='home-outline' size={size} color={color}/>
                    )}}/>

                    <Tab.Screen name='Pedal' component={Pedal} options={{headerShown: false, tabBarIcon: ({size, color}) => (
                        <Octicons name='location' size={size} color={color}/>
                    )}}/>

                    {/* <Tab.Screen name='Novo' component={NewEvent} options={{headerShown:false, tabBarLabel: '', tabBarIcon: ({size, color}) => (
                    <ButtonNew size={size} color={color}/>
                    )}}/> */}

                    <Tab.Screen name='Equipamentos' component={Equipamentos} options={{headerShown:false, tabBarIcon: ({size, color}) => (
                        <AntDesign name="shoppingcart" size={size} color={color} />
                    )}}/>

                    <Tab.Screen name='Perfil' component={DrawerNavigator} options={{headerShown:false, tabBarIcon: ({size, color}) => (
                       <Image source={{uri: 'https://scontent.fjdo1-2.fna.fbcdn.net/v/t39.30808-6/272898753_1329792957500236_8397756379102866395_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Flu-bKNgpF0AX8ZGuM1&_nc_ht=scontent.fjdo1-2.fna&oh=00_AT9vJ6Lplw-cggkpAQf8NuFbcmliAFW1ibbG2MneYJ1CwQ&oe=6235FA83'}} style={{width: size, height: size, borderRadius: size}}/>
                    )}}/>
                </Tab.Navigator>}        
        </View>  
    )
}