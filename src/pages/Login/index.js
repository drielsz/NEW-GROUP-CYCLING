import React, {useState, useEffect} from 'react';
import { View, Dimensions, LogBox, ImageBackground, Animated, Keyboard, TouchableOpacity, Alert } from 'react-native';
import AppLoading from 'expo-app-loading';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Nunito_700Bold, Nunito_900Black } from '@expo-google-fonts/nunito';
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import { Container, Image, Button, Text } from '../../styles/';
import { colors } from '../../styles/colors'
import { TextInput } from 'react-native-paper'

LogBox.ignoreAllLogs(true);
var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;

export default function App({navigation}) {

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


  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Nunito_700Bold,
    Nunito_900Black,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <Container source={require('../../assets/background.png')}>
        <View style={{alignItems:'center'}}>
            <Animated.Image 
            style={{width: logo.x, height: logo.y}}
            source = {require('../../assets/logoxd.png')}
            />    
            
            <Text style ={{fontFamily:'Nunito_700Bold', top: height * 0.03}} fontSize = { height * 0.035 }>GROUP CYCLING</Text> 
        


        <View style={{top: height * 0.05}}>
            <TextInput
            
            label = 'E-mail'
            mode = 'flat'
            style = {
                { width: height * 0.30, height: height * 0. }
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
            mode = 'flat'
            style = {
                { width: height * 0.30, height: height * 0., marginTop: height * 0.030, marginBottom: height * 0.019 }
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
            
            <Button onPress = {
                () => navigation.navigate('Routes')
            }  style={{alignItems:'center', justifyContent:'center'}}>
            
            <Text style = {
                { fontFamily: 'Nunito_900Black' }
            }
            color = { colors.backgroundLogin }
            fontSize = { height * 0.018 }>ENTRAR</Text> 
            </Button >
            
            <View style={{marginTop: height * 0.015}}>
            <Text texttransform = 'none'
            style={{fontFamily:'Roboto_400Regular'}}
            fontSize = { height * 0.015 }>Não possui uma conta?
            
            <Text onPress={() => navigation.navigate('Register')} color = { colors.primary }
            fontSize = { height * 0.015 }
            style={{fontFamily:'Nunito_900Black'}}
            texttransform = 'none'
            borderBottomWidth = { height * 0.002 }> Cadastre-se aqui.</Text> 
            </Text>
            </View> 
            <View style={{top: height * 0.04}}>
                <Image source={require('../../assets/OU02.png')} resizeMode='contain' style={{width: height * 0.5, height: height * 0.015}}/>
            </View>
            <View style={{top: height * 0.02}}>
                <Button height={height * 0.055} background={colors.facebookLogin} style={{alignItems:'center', justifyContent:'center', flexDirection: 'row'}}>
                    <Image style={{width: height * 0.04}} source={require('../../assets/facebooklogin.png')}/>
                    <Text texttransform='none'  style={{fontFamily: 'Nunito_700Bold'}} color={colors.googleLogin} fontSize={height * 0.016}> Entre com o Facebook</Text>
                </Button>
            <View style={{bottom: height * 0.04}}>
                <Button height={height * 0.055} background={colors.googleLogin} style={{alignItems:'center', justifyContent:'center', flexDirection: 'row'}}>
                    <View style={{flexDirection:'row', right: height * 0.01}}>
                        <Image style={{width: height * 0.04}} source={require('../../assets/googlelogin.png')}/>
                        <Text texttransform='none'  style={{fontFamily: 'Nunito_700Bold'}} color={colors.backgroundLogin} fontSize={height * 0.016}> Entre com o Google</Text>
                    </View>
                </Button>
            </View>
            </View>
            
            
        
        </View>
        </Container >
    );
  }
}