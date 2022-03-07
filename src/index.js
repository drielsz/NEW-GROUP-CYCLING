import React from 'react'
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// Rotas verificadas()
import RoutesAuth from './routes'
import {AuthProvider} from './contexts/auth';
// Theme provider
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes'

export default function Navigation () {
  // dark, ligth, null, undefined
  const deviceTheme = useColorScheme()
  const theme = themes[deviceTheme] || theme.ligth

  return(
        <NavigationContainer>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <StatusBar style="light"/>
              <RoutesAuth/>
            </ThemeProvider>
          </AuthProvider>
        </NavigationContainer>
  )
}