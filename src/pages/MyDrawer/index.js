import React from "react";
// 
import { Dimensions } from "react-native";
import { useWindowDimensions } from 'react-native';
// 
import { createDrawerNavigator } from "@react-navigation/drawer";
// 
import { DrawerContent } from '../../components/DrawerContent'

import Routes from '../../routes';
import Perfil from '../Perfil'

var width = Dimensions.get('window').width
const Drawer = createDrawerNavigator();


// TODO: Só abrir clicando. Nessa versão encotramos: scroll e clique.

function DrawerNavigator( ) {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} 
    screenOptions={{drawerPosition: 'right', drawerStyle: {width: width / 1.2}}}>
      <Drawer.Screen name="Perfil" component={Perfil}  options={{headerShown:false}}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;