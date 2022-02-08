import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// 
import Login from '../src/pages/Login';
import Map from '../src/config/Map';
import Routes from '../src/routes';
import Perfil from '../src/pages/Perfil';
import EditProfile from '../src/pages/Perfil/EditProfile';
import Buy from '../src/pages/Equipamentos/Buy';
import Comments from '../src/pages/Equipamentos/Buy/Comments';
import Register from '../src/pages/Register';
import Feed from '../src/pages/Feed';
// Importando Theme
import {ThemeProvider} from 'styled-components';
import themes from './styles/themes';
// Theme Reducer
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import ThemeReducer from './components/Redux/ThemeReducer';
import InstaStories from './components/InstaStories';
// 
const Stack = createStackNavigator();
// Criando STORE com Reducer
const store = createStore(combineReducers({ThemeReducer}), applyMiddleware(thunk))
function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
      <Stack.Screen name='InstaStories' component={InstaStories} options={{headerShown:false}} />
      <Stack.Screen name='Perfil' component={Perfil} options={{haderShown:false}}/>
      <Stack.Screen name="Map" component={Map} options={{headerShown: false}}/>
      <Stack.Screen name='Routes' component={Routes} options={{headerShown: false}} />
      <Stack.Screen name='EditProfile' component={EditProfile} options={{headerShown: false}} />
      <Stack.Screen name='Buy' component={Buy} options={{headerShown: false}} />
      <Stack.Screen name='Comments' component={Comments} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}


export default function App () {
  return(
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar style="light" />
            <MyStack/>
        </NavigationContainer>
      </Provider>

 
  )
}