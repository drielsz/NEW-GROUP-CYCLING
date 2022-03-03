import React, {useContext} from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import {useAuth} from '../contexts/auth'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'


const RoutesAuth = React.FC = () => {
    const {signed, loading} = useAuth()

    if (loading) {
       return(
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
             <ActivityIndicator size='large' color="purple"/>
          </View>
       )
    }
 
    return signed ? <AppRoutes/> : <AuthRoutes/>
     
 }

export default RoutesAuth