import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// Rotas verificadas()
import RoutesAuth from './routes'
import {AuthProvider} from './contexts/auth';


export default function Navigation () {
  return(
        <NavigationContainer>
          <AuthProvider>
            <StatusBar style="light" backgroundColor='transparent' />
            <RoutesAuth/>
          </AuthProvider>
        </NavigationContainer>
  )
}