import React, {useState, useEffect, useCallback} from 'react';
import { View, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Image as ImageR, useColorScheme} from 'react-native';
import { Container, Image, ViewImage, Dot, DotView, Arrow, MarginLeftRight, Spacer,  Button, ViewHeart, ScrollView, Text, AntDesign, ViewBackArrow} from './styles'
import { FlatList} from 'react-native-gesture-handler';
// Icones
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
    // change heart color
    const [heartClicked, setHeartClicked] = useState(false);
    // To do functions that change color
    const [clicked, setClicked] = useState(false)
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
    

    const deviceTheme = useColorScheme()

    
        return(
            <ScrollView contentContainerstyle={{alignItems:'center', justifyContent:'center', flex: 1}} >
              <ViewImage>
                    {/* Image background getting route of what was clicked on the other screen */}
                    <Image source={route.params.imageData} >
                        <ViewBackArrow onPress={() => navigation.navigate('Equipamentos')}>
                            {deviceTheme === 'light' ? 
                            <AntDesign name="arrowleft" size={24} color="black" />
                            :
                            <AntDesign name="arrowleft" size={24} color="white" />
                            }
                        </ViewBackArrow>
                    </Image>
                </ViewImage>
                    {/* Area to mark as preferred and comment on the product  */}
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
                    {/* Product information */}
                    <MarginLeftRight style={{position:'absolute', top: height * 0.369}}>
                            <Text allowFontScaling={false} style={{fontFamily:'Nunito_700Bold'}}>{route.params.imageTitle}</Text> 
                            <Text allowFontScaling={false} style={{fontFamily:'Nunito_300Light'}}>R$ {route.params.imagePrice}</Text>      
                    </MarginLeftRight>
                    {/* This is serving as a height base for some things to stay the way they are. */}
                    <Arrow>
                        <TouchableOpacity>
                            {/* <AntDesign name="arrowright" size={24} color="black" /> */}
                        </TouchableOpacity>
                    </Arrow>

                    {/* DotView to image */}
                        {/* <DotView style={{bottom: height * 0.050}}>
                            <Dot/>
                            <Dot bg={colors.gray}/>
                            <Dot bg={colors.gray}/>
                            <Dot bg={colors.gray}/>
                        </DotView> */}
                    {/* DotView end */}

                    {/* purchase session */}
                    <Button style={{top: height * 0.04}}>
                        <Text allowFontScaling={false}  style={{color: colors.secondary, fontFamily:'Nunito_700Bold'}}>Comprar agora</Text>
                    </Button> 
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', top: height * 0.07, justifyContent:'space-evenly'}}>
                        <Button width={'42%'} bg={deviceTheme === 'dark' ? colors.name101010 : colors.blind} style={{borderColor: deviceTheme === 'dark' ? 'white' : 'black', borderWidth: 1}}>
                            <Text allowFontScaling={false}  style={{color: deviceTheme === 'dark' ? colors.secondary : colors.name101010, fontFamily:'Nunito_700Bold'}}>Adicionar ao carrinho</Text>
                        </Button> 
                        <Button width={'42%'} bg={deviceTheme === 'dark' ? colors.name101010 : colors.blind} style={{borderColor: deviceTheme === 'dark' ? 'white' : 'black', borderWidth: 1}}>
                            <Text allowFontScaling={false}  style={{color: deviceTheme === 'dark' ? colors.secondary : colors.name101010, fontFamily:'Nunito_700Bold'}}>Adicionar à lista de desejos</Text>
                        </Button> 
                    </View>
                    
                {/* Part of related products */}
                <MarginLeftRight style={{marginTop: height * 0.13}}>
                    <Text allowFontScaling={false} style={{bottom: height * 0.005, fontFamily: 'Nunito_700Bold'}}>Produtos relacionados</Text>
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