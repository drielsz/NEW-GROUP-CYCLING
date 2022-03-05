// Direitos autorais: https://www.youtube.com/watch?v=w7zQMbcF2Ag
import React from 'react';
// Importações do react native, comum... 
import {View, Dimensions, Text, Image, StyleSheet} from 'react-native';
// Safe area View, responsavel por os componentes dentro do aplicativo em lugares seguros, ou seja, não deixar um texto no topo
// em cima de alguma coisa.
import {SafeAreaView} from './styles'
// Degrade;
import { LinearGradient } from 'expo-linear-gradient';
// Scroll View responsavel por scrollar;
import { ScrollView } from 'react-native-gesture-handler';
// Lista de usuarios ( Nomes e Imagens );
import { userStories } from '../userStories'
// Cores para ser utilizada;
import { colors } from '../../styles/colors'
// Icones;
import  Ionicons  from 'react-native-vector-icons/Ionicons';
// Dimensões da tela;
var height = Dimensions.get('window').height;

const InstaStories = () => {
    return(
        <SafeAreaView style={{flex:1, marginLeft: height * 0.040}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{padding: height * 0.007}}>
                    {/* Primeira imagem, para o usuario adicionar alguma foto*/}
                    <View style={[styles.userImage, {backgroundColor:colors.primary}]}/>
                    {/* Style Sheet absolute fill = position:'absolute' só que ja vem com um top, bot, left, right = 0; */}
                    <View style={{...StyleSheet.absoluteFill}}>
                        <View style={styles.addBtnContainer}>
                            <Ionicons name="add" style={styles.addBtn}/>
                        </View>
                        
                    </View>
                </View>
                {/* Mapeando o json e desestruturando, para pegar o item, index, usado para acessar algo dentro do json, por exemplo: item.photo */}
               {userStories.map((item, index) =>(
                   <View style={{width: height * 0.085, padding: height * 0.005}} key={index}>
                       <LinearGradient 
                       style={{padding: height * 0.002, borderRadius: height * 0.050}}
                       colors={[colors.primary, '#FF914D', '#FF914D95']}>
                           {/* Acessando a foto através de item.photo */}
                           <Image source={item.avatar} style={[styles.userImage,{borderWidth: height * 0.0005}]}/>
                       </LinearGradient>
                   </View>
               ))}
            </ScrollView>
        </SafeAreaView>
    )
}



export default InstaStories;

// style sheet
const styles = StyleSheet.create({
    userImage:{
        height: height * 0.070,
        width: height * 0.070,
        borderRadius: height * 0.050,
        borderColor: colors.blind,
        
    },
    userName:{
        textAlign:'center',
        fontSize: height * 0.015,
        textTransform: 'lowercase',
        marginTop: height * 0.005
    },
    addBtnContainer:{
        marginTop: height * 0.055,
        backgroundColor: colors.primary,
        marginLeft: height * 0.055,
        width: height * 0.023,
        height: height * 0.023,
        borderRadius: height * 0.050,
        borderWidth: height * 0.0015,
        borderColor: '#ffffff',
        justifyContent:'center'
    },
    addBtn:{
        color: '#ffffff',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize: height * 0.014
    }
})