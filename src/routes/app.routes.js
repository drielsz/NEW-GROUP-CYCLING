// Pages after login is complete
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// Screens
import BottomRoutes from './bottom.routes'
import Map from '../../src/config/Map';
import Perfil from '../../src/pages/Perfil';
import EditProfile from '../../src/pages/Perfil/EditProfile';
import Buy from '../../src/pages/Equipamentos/Buy';
import Comments from '../../src/pages/Equipamentos/Buy/Comments';
import Feed from '../../src/pages/Feed';
import InstaStories from '../components/InstaStories';

const AppStack = createStackNavigator()

const AppRoutes = React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={BottomRoutes} options={{headerShown:false}}/>
        <AppStack.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
        <AppStack.Screen name='InstaStories' component={InstaStories} options={{headerShown:false}} />
        <AppStack.Screen name='Perfil' component={Perfil} options={{haderShown:false}}/>
        <AppStack.Screen name="Map" component={Map} options={{headerShown: false}}/>
        <AppStack.Screen name='EditProfile' component={EditProfile} options={{headerShown: false}} />
        <AppStack.Screen name='Buy' component={Buy} options={{headerShown: false}} />
        <AppStack.Screen name='Comments' component={Comments} options={{headerShown: false}} />
    </AppStack.Navigator>
)

export default AppRoutes