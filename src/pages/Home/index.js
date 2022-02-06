import React, { Component, useState } from 'react';
import{ 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    ScrollView, 
    TouchableNativeFeedback,
    Dimensions,
    ImageBackground,
    TouchableOpacity
 } from 'react-native';
// Estilos do projeto
import { SafeAreaView } from './styles';
// Cores utilizadas
import { colors } from '../../styles/colors';
// Importando os Stories || Paginas, componentes
import HomeFeedPosts from '../../components/HomeFeedPosts';
import InstaStories from '../../components/InstaStories';
// Dimensões, utilizada para fazer responsividade.
var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;

const RedeSocial =  ({navigation}) => {
    return (
      <SafeAreaView>
          <InstaStories/>
          <HomeFeedPosts/>
      </SafeAreaView>
    );
}



export default RedeSocial;