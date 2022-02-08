// React
import React from 'react';
import { View, Text, Dimensions} from 'react-native';
//Icones
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// Estilos
import {
    SafeAreaView,
    ImageBackground,
    Image,
    ViewIcons,
    ViewReport
}  from './styles';

import {styles} from './styles'
// Cores utilizadas
import { colors } from '../../styles/colors';
// Scroll View responsavel por scrollar;
import { ScrollView } from 'react-native-gesture-handler';
// lista de usuarios, com fotos, descrições, avatar..
import {ImagesPosts} from '../ImagesPosts';
// Dimensions
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

const HomeFeedPosts = () => {
    return(
        <SafeAreaView>
            <ScrollView vertical showsVerticalScrollIndicator={false}>
                {/* Vai ser utilizado: ImageBackground, Image. A imageBackground é para permitir Image ficar por cima. */}
                {ImagesPosts.map((item, index) =>(
                <View>
                    <ImageBackground  key={index} source={item.image} style={{marginVertical: height * 0.08}} resizeMode='cover'>
                    <View style={{ bottom: height * 0.05,}}>       
                            <Image source={item.avatar} size={height * 0.065} style={styles.viewIcon}/>                        
                    </View>
                    {/* <View style={{bottom: height * 0.03, right: height * 0.02}}>
                        <Image source={item.avatar} size={height * 0.06} style={styles.viewIcon}/>
                        <Text style={{color: colors.tertiary, left: height * 0.11, bottom: height * 0.082}}>{item.name}</Text>
                        <Text style={{color: colors.desc, left:height * 0.29, bottom: height * 0.105}}>{item.time}</Text>
                    </View>
                        <ViewIcons style={styles.viewIcon}>
                            <View style={{flexDirection:'row'}}>
                                <Octicons name='comment' size={height * 0.034} style={{right: height * 0.015}}/>
                                <Ionicons name="share-social-outline" size={height * 0.034} />
                                <Ionicons name="heart-outline" size={height * 0.034} style={{left: height * 0.015}}/>
                            </View>
                        </ViewIcons> */}
                    </ImageBackground>
                    
                    {/* <View style={{bottom: height * 0.07, left: width * 0.05}}>
                        <Text>{item.name}</Text>
                        <Text style={{color: colors.desc}}>{item.desc}</Text>
                    </View> */}
                </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeFeedPosts;