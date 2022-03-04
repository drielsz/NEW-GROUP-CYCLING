import React, {useState, useEffect} from 'react';
import { View, Dimensions, LogBox, Animated, Keyboard, Alert} from 'react-native';
// TouchableOpacity
import { TouchableOpacity } from 'react-native-gesture-handler';
// Estilos
import { Container, Image, Button, Text } from '../../styles/';
import { colors } from '../../styles/colors';
import { TextInput } from 'react-native-paper';
// api
import {api} from '../../services/axios';
import {useAuth} from '../../contexts/auth'
// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreAllLogs(true);
var height = Dimensions.get("window").height

const Login = ({navigation}) => {
    const {signed, user, signIn} = useAuth()
    console.log(signed)
    console.log(user)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }

    const onChangePassword = (txtPassword) => {
        setPassword(txtPassword)
    }

    const SignIn = async () => {
        const response = await api.post("login", {
            email: email,
            password: password
        }).then (async (response) => {
            await AsyncStorage.setItem("token", response.data.token);
            signIn()
        }).catch (async (error) => {
            if(error.response.status === 422){
                Alert.alert('', 'Preencha todos os dados.')
            }
            if(error.response.status === 400){
                Alert.alert('', "E-mail e/ou senha incorretos!")
            }
            console.log(error.response.data)
        }
        )
    }

    const [logo] = useState(new Animated.ValueXY({x: height * 0.176, y: height * 0.176 }))

    useEffect(() => {
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
    })

    function keyboardDidShow () {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: height * 0,
                duration: 100,
                useNativeDriver: false,
            }),
            Animated.timing(logo.y, {
                toValue: height * 0,
                duration: 100,
                useNativeDriver: false,
            })
        ]).start()
    }

    function keyboardDidHide () {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue:  height * 0.176,
                duration: 100,
            }),
            Animated.timing(logo.y, {
                toValue:  height * 0.176,
                duration: 100
            })
        ]).start()
    }

    return (
        <Container source={require('../../assets/background.png')}>
        <View style={{alignItems:'center'}}>
            <Animated.Image 
            style={{width: logo.x, height: logo.y}}
            source = {require('../../assets/logoxd.png')}
            />    
            
            <Text allowFontScaling={false} style ={{fontFamily:'Nunito_700Bold', top: height * 0.03}} fontSize = { height * 0.035 }>GROUP CYCLING</Text> 
        
        <View style={{top: height * 0.05}}>
            <TextInput
            allowFontScaling={false}
            value={email}
            autoCapitalize='none'
            onChangeText = {txtEmail => onChangeEmail(txtEmail)}
            label = 'E-mail'
            labelStyle={{fontSize: 300}}
            mode = 'flat'
            style = {
                { width: height * 0.30}
            }
            theme = {
                {
                    colors: {
                        placeholder: '#FF914D',
                        text: '#FF914D',
                        primary: '#FF914D',
                        underlineColor: '#FF914D',
                        background: 'transparent',
                        selectionColor: '#FF914D',
                        selectionColor: '#FF914D',
                        outlineColor: '#FF914D'
                    }
                }
            }
            /> 
            <TextInput label = 'Senha'
            allowFontScaling={false}
            value={password}
            onChangeText = {txtPassword => onChangePassword(txtPassword)}
            autoCapitalize='none'
            secureTextEntry
            mode = 'flat'
            style = {
                { width: height * 0.30, marginTop: height * 0.030, marginBottom: height * 0.019 }
            }
            theme = {
                {
                    colors: {
                        placeholder: '#FF914D',
                        text: '#FF914D',
                        primary: '#FF914D',
                        underlineColor: '#FF914D',
                        background: 'transparent',
                        selectionColor: '#FF914D',
                        selectionColor: '#FF914D',
                        outlineColor: '#FF914D'
                    }
                }
            }
            /> 

        </View>
            
            <Button onPress={SignIn}  
                style={{alignItems:'center', justifyContent:'center'}}>
                <Text allowFontScaling={false} style={{fontFamily: 'Nunito_700Bold'}}
                color = { colors.backgroundLogin }
                fontSize = { height * 0.018 }>ENTRAR</Text> 
            </Button >
            
            <TouchableOpacity style={{marginTop: height * 0.015}}  onPress={() => navigation.navigate('Register')} >
                <Text allowFontScaling={false} 
                texttransform = 'none'
                style={{fontFamily:'Nunito_400Regular'}}
                fontSize = { height * 0.015 }>Não possui uma conta?
                
                <Text allowFontScaling={false} 
                color={colors.primary}
                fontSize = { height * 0.015 }
                style={{fontFamily:'Nunito_800ExtraBold'}}
                texttransform = 'none'
                borderBottomWidth = { height * 0.002 }> Cadastre-se aqui.</Text> 
                </Text>
            </TouchableOpacity> 
            <View style={{top: height * 0.04}}>
                <Image source={require('../../assets/OU02.png')} resizeMode='contain' style={{width: height * 0.5, height: height * 0.015}}/>
            </View>

            <View style={{top: height * 0.02}}>
                <Button height={height * 0.055} background={colors.facebookLogin} style={{alignItems:'center', justifyContent:'center', flexDirection: 'row'}}>
                    <Image style={{width: height * 0.04}} source={require('../../assets/facebooklogin.png')}/>
                    <Text allowFontScaling={false} texttransform='none'  style={{fontFamily: 'Nunito_400Regular'}} color={colors.googleLogin} fontSize={height * 0.016}> Entre com o Facebook</Text>
                </Button>
                <View style={{bottom: height * 0.04}}>
                    <Button height={height * 0.055} background={colors.googleLogin} style={{alignItems:'center', justifyContent:'center', flexDirection: 'row'}}>
                        <View style={{flexDirection:'row', right: height * 0.01}}>
                            <Image style={{width: height * 0.04}} source={require('../../assets/googlelogin.png')}/>
                            <Text allowFontScaling={false} texttransform='none'  style={{fontFamily: 'Nunito_400Regular'}} color={colors.backgroundLogin} fontSize={height * 0.016}> Entre com o Google</Text>
                        </View>
                    </Button>
                </View>
            </View>
            
            
        
        </View>
        </Container >
    );
  }


export default Login