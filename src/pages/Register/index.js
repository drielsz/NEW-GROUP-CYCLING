import React, {useState, useEffect} from 'react';
import { View, TextInput, Dimensions, StyleSheet, KeyboardAvoidingView, Animated, Image, Keyboard } from 'react-native';
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
export default function Register ({navigation}) {

    const [ text, onChangeText ] = useState(null)
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
                    <TextInput value={text} onChangeText={onChangeText} 
                            placeholder='E-mail' style={styles.input}
                            placeholderTextColor={colors.primary}
                    />
                    <View style={{top: height * 0.033}}>
                        <TextInput value={text} onChangeText={onChangeText} 
                                placeholder='Senha' style={styles.input}
                                placeholderTextColor={colors.primary}
                        />
                    </View>
                    <View style={{top: height * 0.066}}>
                        <TextInput value={text} onChangeText={onChangeText} 
                                placeholder='Nome de usuário' style={styles.input}
                                placeholderTextColor={colors.primary}
                        />
                    </View>
               <View style={{alignItems:'center', top: height * 0.08}}>
                <Button onPress = {
                    () => navigation.navigate('Register')
                }  style={{alignItems:'center', justifyContent:'center'}}>
                
                <Text style = {
                    { fontFamily: 'Nunito_900Black' }
                }
                color = { colors.backgroundLogin }
                fontSize = { height * 0.018 }>CADASTRAR-SE</Text> 
                </Button >
                <View style={{top: height * 0.02}}>
                <Text texttransform='none' fontSize={height * 0.015}>Já possui uma conta?
                <Text texttransform='none' fontSize={height * 0.015} color={colors.primary} style={{fontFamily:'Nunito_900Black'}}> Faça o login aqui.</Text></Text>
                </View>

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