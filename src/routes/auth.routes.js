// Pages that the user can access without logging in
import React from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import BottomRoutes from './bottom.routes'
import {createStackNavigator} from '@react-navigation/stack'
import AddPost from '../pages/Home/AddPost'

const AuthStack = createStackNavigator()

const AuthRoutes = React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <AuthStack.Screen name='Register' component={Register} options={{headerShown: false}}/>
    </AuthStack.Navigator>
)

export default AuthRoutes