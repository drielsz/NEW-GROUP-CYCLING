import React from 'react';
// Importações normais
import {View, Text, Dimensions, StyleSheet, Image, TouchableOpacity} from 'react-native';
// Se as fontes não forem carregadas:
import AppLoading from 'expo-app-loading';
// Fontes
import {useFonts, Nunito_700Bold} from '@expo-google-fonts/nunito';
// Icones
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons'; 
// Cor
import {colors} from '../../../styles/colors'
// Styles Global
import {ImageProfile} from '../../../styles'
// Pegando as dimensões da tela
var height = Dimensions.get('window').height
var width = Dimensions.get('window').width

export default function EditProfile ({navigation}) {
    // Se as fontes não forem carregadas..
    let [fontsLoaded] = useFonts({
        Nunito_700Bold
    })
    if (!fontsLoaded) {
        return <AppLoading/>
    }else{
        // Se forem carregadas:
    return(
        <View style={styles.container}>
            {/* Parte de cima */}
            <View style={styles.head}>
                {/* Parte onde destina o usuario a tela anterior */}
                <View style={styles.circle}>
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Feather name="arrow-left" size={height * 0.04} color={colors.secondary} />
                  </TouchableOpacity>
                </View>


                    <Text allowFontScaling={false} style={styles.textH}>Editar seu perfil</Text>
            </View>

            {/* Parte de baixo */}
            <View>
                <ImageProfile margin={height * 0.040625} source={require('../../../assets/Perfil-picture.png')}/>

                {/* Zona que permite o usuario trocar a imagem de perfil*/}
                <View style={styles.circleEdit}>
                    <Feather name="edit" size={height * 0.0275} color={colors.secondary}/>
                </View>

                <View style={styles.viewN}>
                    <Text allowFontScaling={false} style={styles.textN}>Adriel Laurentino</Text>
                    {/* Linha em baixo do nome */}
                        <View style={styles.line}/>
                </View>

            </View>
            {/* Informações básicas */}
            <View style={styles.viewBasic}>
                <Text allowFontScaling={false} style={styles.textInfo}>Informações básicas</Text>
                <View style={styles.lineinfo}/>
            <View style={styles.resultName}>
                    <Text allowFontScaling={false} style={styles.textoCinza}>Nome:<Text style={{color: 'black'}}> Adriel Laurentino de Oliveira</Text></Text>
            </View>
                <View style={styles.resultData}>
                    <Text allowFontScaling={false} style={styles.textoCinza}>Data de Nascimento:<Text style={{color: 'black'}}> 18/11/2004</Text></Text>
                </View>
            </View>

            {/* Informações Privadas */}
            <View style={styles.viewPrivate}>
                <Text allowFontScaling={false} style={styles.textInfo}>Informações privadas</Text>
                <View style={styles.lineinfo}/>
            <View style={styles.resultName}>
                    <Text allowFontScaling={false} style={styles.textoCinza}>E-mail:<Text style={{color: 'black'}}> adriellaurentino4@gmail.com</Text></Text>
            </View>
                <View style={styles.resultData}>
                    <Text allowFontScaling={false} style={styles.textoCinza}>Estado:<Text style={{color: 'black'}}> Rio grande do Norte</Text><Text>  Cidade:</Text><Text style={{color: 'black'}}> Mossoró</Text></Text>
                    <Text allowFontScaling={false} style={{top: height * 0.022, color: colors.cinzaEditProfile}}>Telefone:<Text style={{color: 'black'}}> (84) 9 88065971</Text></Text>
                </View>
                
            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        top: height * 0.02
    },
    head:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: height * 0.050625,
    },
    circle: {
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        backgroundColor: colors.primary,
        width: height * 0.065625,
        height: height * 0.065625,
        borderRadius: height * 0.065625,
        right: width * 0.8
    },
    circleEdit: {
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        backgroundColor: colors.primary,
        width: height * 0.055625,
        height: height * 0.055625,
        borderRadius: height * 0.065625,
        right: width * 0.333,
        top: height * 0.15,
        // Sombras
        shadowColor: colors.tertiary,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        
        elevation: 16,
    },
    textH:{
        textAlign:'center',
        fontSize: height * 0.02125,
        color: colors.tertiary,
        fontFamily: 'Nunito_700Bold'
    },
    textN:{
        textAlign:'center',
        fontSize: width * 0.075,
        color: colors.tertiary,
        fontFamily: 'Nunito_700Bold',
    },
    viewN:{
        bottom: height * 0.02,
    },
    line:{
        alignSelf: 'center',
        borderBottomColor: colors.primary,
        borderBottomWidth: width * 0.005,
        width: height * 0.336,
        position: 'relative',
        bottom: height * 0.008
    },

    // lineinfo:{
    //     alignSelf: 'stretch',
    //     borderBottomColor: colors.primary,
    //     borderBottomWidth: width * 0.005,
    //     width: height * 0.245,
    //     position: 'relative',
    //     bottom: height * 0.004
    // },

    viewBasic:{
        justifyContent: 'flex-start',
        padding: width * 0.05,
        top: height * 0.04,
    },
    viewPrivate:{
        justifyContent: 'flex-start',
        padding: width * 0.05,
        top: height * 0.0529,
    },
    textInfo:{
        fontSize: height * 0.02425,
        fontFamily: 'Nunito_700Bold',
    },
    resultName:{
        top: height * 0.0159
    },
    resultData:{
        top: height * 0.039999
    },
    textoCinza:{
        color: colors.cinzaEditProfile
    }
})