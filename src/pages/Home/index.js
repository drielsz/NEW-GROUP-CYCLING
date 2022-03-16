import React, {  } from 'react';
import{ 
    View, 
    Dimensions,
    useColorScheme,
    PixelRatio,  
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback
 } from 'react-native';
// Cores utilizadas
import { colors } from '../../styles/colors';
// Dimensões, utilizada para fazer responsividade.
var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;
// Status Bar
import { StatusBar } from 'expo-status-bar';
// Styles
import { SafeAreaView,Header, Image, Name, Time, Description, ViewReactions, ImageReact } from './styles';
// Images
import POSTFEED from '../../assets/POSTFEED.png';
import LikePost from '../../assets/LikePost.png';
import CommentPost from '../../assets/CommentPost.png';
import SharePost from '../../assets/SharePost.png';
// Icons
import { AntDesign, MaterialCommunityIcons, Ionicons   } from '@expo/vector-icons'; 
// Global Styles
import { Avatar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function RedeSocial () {  
    const deviceTheme = useColorScheme()
    return (
      <SafeAreaView>
          <ScrollView style={{flex: 1, top: height * 0.03}}>
          {deviceTheme === 'dark' ? <StatusBar style='light'/> : <StatusBar style='dark'/>}
          <View>
              <Header>
                <View style={{left: height * 0.02}}>
                    <Avatar.Image size={35} source={{uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}}/>
                </View>
                <View style={{left: height * 0.036}}>
                    <Name>japadesignteam</Name>
                </View>
                <View style={{position:'absolute', right: height * 0.02}}>
                    <Time>5 minutos atrás</Time>
                </View>
              </Header>
              <View style={{height: height * 0.01}}/>
              <Image resizeMode='cover' source={{uri: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}} style={{width: width, height: height * 0.446}}/>
                {/* Will Have three itens, View From React */}
                <ViewReactions>
                    <TouchableOpacity style={{width: height * 0.026, height: 25, justifyContent:'center', alignItems:'center'}}>
                        <Ionicons name="share-social-outline" size={25} color="#98A6A9" style={{width: 25}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: height * 0.026, height: 25, justifyContent:'center', alignItems:'center'}}>
                        <MaterialCommunityIcons name="comment-processing-outline" size={25} color="#98A6A9" style={{width: 25}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: height * 0.026, height: 25, justifyContent:'center', alignItems:'center'}}>
                        <AntDesign name='hearto' color='#98A6A9' size={25} style={{width: 25}}/>
                    </TouchableOpacity>
                </ViewReactions>
              <View style={{left: height * 0.011, top: height * 0.012, height: height * 0.15, maxWidth: width - height * 0.023}}>
                <Name>japadesignteam</Name>
                    <Description>Descrição do comentário aqui, pedalando mais 1 dia na fé gggg na fé de Deus. Só agradece pela caminhada. Ta ligado? Vamos treinar</Description>
              </View>
          </View>
          </ScrollView>
      </SafeAreaView>
    );
}