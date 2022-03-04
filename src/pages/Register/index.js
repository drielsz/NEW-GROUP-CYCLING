import React, {useState, useEffect} from 'react';
import { View, TextInput, Dimensions, StyleSheet, KeyboardAvoidingView, Animated, Image, Keyboard, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// Estilos
import { Container } from './styles';
// Dimensões
var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;
// Estilos globais
import { Text, Button } from '../../styles'
// Cores
import { colors } from '../../styles/colors';
// Touchable Opacity
import { TouchableOpacity } from 'react-native-gesture-handler';
// API e ASYNC
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../../services/axios'
// 

export default function Register ({navigation}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')

    const onChangeName = (txtName) => {
        setName(txtName)
    }

    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }

    const onChangePassword = (txtPassword) => {
        setPassword(txtPassword)
    }

    const RegisterUser = async () => {
        const response = await api.post("register", {
            name: name,
            email: email,
            password: password,
            password_again: password
        }).then (async (response) => {
            if(response.status === 201){
                Alert.alert("Conta cadastrada com sucesso", `Seja bem vindo, ${name}`)
            }
        }).catch( async (error) => {
            if(error.response.status === 400){
                Alert.alert(`Olá, ${name}`, "Esse e-mail já está em uso, tente novamente utilizando outro!")
            }
            if(error.response.status === 422){
                Alert.alert('', 'Preencha todos os dados.')
            }
            console.log(error.response.status)
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
            }),
            Animated.timing(logo.y, {
                toValue: height * 0,
                duration: 100
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

    return(
        <Container source={require('../../assets/background.png')}>
            <View style={{bottom: height * 0.15, alignItems:'center'}}>
                <Animated.Image
                source={require('../../assets/logoxd.png')} 
                style={{bottom: height * 0.023, width: logo.x, height: logo.y}}/>

                <Text style ={{fontFamily:'Nunito_700Bold'}} fontSize = { height * 0.035 }>GROUP CYCLING</Text>
                <KeyboardAvoidingView style={{top: height * 0.08, alignItems:'center'}}>
                    <TextInput 
                        value={email} 
                        keyboardType='email-address'
                        textContentType='none'
                        autoCapitalize='none'
                        autoCompleteType='email'
                        onChangeText={txtEmail => onChangeEmail(txtEmail)}
                        placeholder='E-mail' style={styles.input}
                        placeholderTextColor={colors.primary}
                    />
                    <View style={{top: height * 0.033}}>
                        <TextInput 
                        autoCapitalize='none'
                        secureTextEntry
                        value={password} 
                        onChangeText={txtPassword => onChangePassword(txtPassword)} 
                        placeholder='Senha' style={styles.input}
                        placeholderTextColor={colors.primary}
                        />
                    </View>
                    <View style={{top: height * 0.066}}>
                        <TextInput 
                        value={name} 
                        onChangeText = {txtName => onChangeName(txtName)} 
                        placeholder='Nome de usuário' style={styles.input}
                        placeholderTextColor={colors.primary}
                        />
                    </View>
               <View style={{alignItems:'center', top: height * 0.08}}>
                <Button onPress = {
                        () => RegisterUser()
                    }  style={{alignItems:'center', justifyContent:'center'}}>
                    
                    <Text style = {
                        { fontFamily: 'Nunito_700Bold' }
                    }
                    color = { colors.backgroundLogin }
                    fontSize = { height * 0.018 }>CADASTRAR-SE</Text> 
                </Button >
                <TouchableOpacity style={{top: height * 0.02    }} onPress={() => navigation.navigate('Login')}>
                    <Text texttransform='none' style={{fontFamily: 'Nunito_400Regular'}} fontSize={height * 0.015} >Já possui uma conta?
                    <Text texttransform='none' fontSize={height * 0.015} color={colors.primary} style={{fontFamily:'Nunito_800ExtraBold'}}> Faça o login aqui.</Text></Text>
                </TouchableOpacity>

               </View>
            </KeyboardAvoidingView>
            </View>
       </Container>
    )
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: height * 0.0009,
        borderColor: colors.primary,
        padding: height * 0.002,
        width: width / 1.55,
        color: colors.primary
    }
})