import React, {useState, useEffect, useCallback} from 'react';
import { View, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Image as ImageR, RefreshControl} from 'react-native';
import { Container, Image, ViewImage, Dot, DotView, Arrow, MarginLeftRight, Spacer,  Button, ViewHeart, ScrollView, Text} from './styles'
import { FlatList} from 'react-native-gesture-handler';
// Icones
import { AntDesign } from '@expo/vector-icons'; 
import Comments  from '../../../assets/Comments.png'
// Cores
import { colors } from '../../../styles/colors';
// Pegando as dimensões
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
// Fontes
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Roboto_700Bold, 
    Roboto_300Light
} from '@expo-google-fonts/roboto'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
}

export default function Buy ({navigation, item, route}) {
    // Scroll
    const [position, setPosition] = useState(0)
    
    // Mudar a cor do coração
    const [heartClicked, setHeartClicked] = useState(false);

    const favoriteHeart = () => {
        setHeartClicked(!heartClicked)
    }

    const [ images, setimages ] = useState([
        require('../../../assets/FEED08.png'),
        require('../../../assets/QUADROBIKE.png'),
        require('../../../assets/WOMAN02.png'),
        require('../../../assets/WOMAN01.png'),
        require('../../../assets/QUADROS.png'),
        require('../../../assets/FEED09.png'),
        require('../../../assets/FEED02.png'),
        require('../../../assets/FEED04.png'),
        require('../../../assets/QUADROS.png'),
        require('../../../assets/FEED09.png'),
        require('../../../assets/FEED02.png'),
        require('../../../assets/FEED04.png'),
      ])
    
    const handleScroll = (event) => {
        var positionX = event.nativeEvent.contentOffset.x;
        var positionY = setPosition(positionY = event.nativeEvent.contentOffset.y);
    }
    console.log(position)
        return(
            <ScrollView contentContainerstyle={{alignItems:'center', justifyContent:'center', flex: 1}} onScroll={handleScroll}>
              <ViewImage>
                    {/* Imagem recebendo route do que foi clicado na outra tela */}
                    <Image source={route.params.imageData} />
                </ViewImage>
                    {/* Area de marcar como preferido e comentar sobre o produto  */}
                    <MarginLeftRight style={{bottom: height * 0.402}}>
                        <ViewHeart style={{position:'absolute'}}>
                            <TouchableOpacity onPress={() => favoriteHeart()}>
                                <AntDesign name={heartClicked ? 'hearto' : 'heart'} size={height * 0.032} color={heartClicked ? colors.blind : colors.red} style={{right: height * 0.01}}/>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
                                <ImageR source={Comments} style={{width: height * 0.032, height: height * 0.032, left: height * 0.02}}/>  
                            </TouchableOpacity>

                        </ViewHeart>
                    </MarginLeftRight>
                    {/* Informaçoes do produto */}
                    <MarginLeftRight style={{position:'absolute', top: height * 0.369}}>
                            <Text allowFontScaling={false} style={{fontFamily:'Nunito_700Bold'}}>{route.params.imageTitle}</Text> 
                            <Text allowFontScaling={false} style={{fontFamily:'Nunito_300Light'}}>R$ {route.params.imagePrice}</Text>      
                    </MarginLeftRight>
                    {/* Parte para >>> a foto */}
                    <Arrow>
                        <TouchableOpacity>
                            {/* <AntDesign name="arrowright" size={24} color="black" /> */}
                        </TouchableOpacity>
                    </Arrow>

               {/* DotView para a imagem */}
                {/* <DotView style={{bottom: height * 0.050}}>
                    <Dot/>
                    <Dot bg={colors.gray}/>
                    <Dot bg={colors.gray}/>
                    <Dot bg={colors.gray}/>
                </DotView> */}

                {/* Adicionar ao carrinho */}
            
                    <Button style={{top: height * 0.04}}>
                        <Text allowFontScaling={false}  style={{color: colors.secondary, fontFamily:'Roboto_700Bold'}}>Adicionar ao carrinho</Text>
                    </Button> 

                {/* Parte dos produtos relacionados */}
                <MarginLeftRight style={{marginTop: height * 0.090}}>
                    <Text allowFontScaling={false} style={{bottom: height * 0.005, fontFamily: 'Roboto_700Bold'}}>Produtos relacionados</Text>

                    <View>
                        <ScrollView scrollEnabled>
                            <FlatList
                            data={images}
                            numColumns={2}
                            nestedScrollEnabled
                            renderItem={({item, index}) => (
                                <TouchableWithoutFeedback onPress={() => setTimeout(() => {
                                    item,
                                    navigation.navigate('Buy', {
                                        imageData: item
                                    })
                                }, 350)}>
                                    <Image
                                        source={item}
                                        resizeMode={'cover'}
                                        key={index}
                                        style={{width: width / 2.3, height: height * 0.2,
                                        margin: height * 0.002, right: height * 0.005}}
                                    />
                                </TouchableWithoutFeedback>
                            )}
                            />
                        </ScrollView>
                    </View>

                </MarginLeftRight>

            </ScrollView>
        )
}