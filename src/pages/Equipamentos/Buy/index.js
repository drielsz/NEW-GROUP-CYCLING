import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Dimensions, FlatList, ScrollView, TouchableWithoutFeedback, Image as ImageR } from 'react-native';
import { Container, Image, ViewImage, Dot, DotView, Arrow, MarginlANDr, Spacer,  Button, ViewHeart} from './styles'
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


export default function Buy ({navigation, item, route}) {
    const [ images, setimages]= useState([
        require('../../../assets/FEED08.png'),
        require('../../../assets/QUADROBIKE.png'),
        require('../../../assets/WOMAN02.png'),
        require('../../../assets/WOMAN01.png'),
        require('../../../assets/QUADROS.png'),
        require('../../../assets/FEED09.png'),
        require('../../../assets/FEED02.png'),
        require('../../../assets/FEED04.png'),
      ])

    // Randomizar imagens
    const changeImage = () => {
        const randomNumber = Math.floor(Math.random() * item.length);
    }
    // Clickado ou não?
    const [ clicked, setClicked]= useState()
    // Mudar a cor do coração
    const [heartClicked, setHeartClicked] = useState(false);

    const favoriteHeart = () => {
        setHeartClicked(!heartClicked)
    }
    // Fontes
    let [fontsLoaded] = useFonts({
        Roboto_700Bold, 
        Roboto_300Light
    })
    if (!fontsLoaded) {
        return <AppLoading/>
    } else{
        return(
            <Container>
                <ViewImage>
                    {/* Imagem recebendo route do que foi clicado na outra tela */}
                    <Image source={route.params.imageData} />
                </ViewImage>
                    {/* Area de marcar como preferido e comentar sobre o produto  */}
                    <MarginlANDr style={{bottom: height * 0.402}}>
                        <ViewHeart style={{position:'absolute'}}>
                            <TouchableOpacity onPress={() => favoriteHeart()}>
                                <AntDesign name={heartClicked ? 'hearto' : 'heart'} size={height * 0.032} color={heartClicked ? colors.blind : colors.red} style={{right: height * 0.01}}/>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
                                <ImageR source={Comments} style={{width: height * 0.032, height: height * 0.032, left: height * 0.02}}/>  
                            </TouchableOpacity>

                        </ViewHeart>
                    </MarginlANDr>
                    {/* Informaçoes do produto */}
                    <MarginlANDr style={{position:'absolute', top: height * 0.369}}>
                            <Text style={{fontFamily:'Roboto_700Bold'}}>Tarmac SL7 Comp 2022</Text> 
                            <Text style={{fontFamily:'Roboto_300Light'}}>R$ 48.000,00</Text>      
                    </MarginlANDr>
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
                    <Text style={{color: colors.secondary, fontFamily:'Roboto_700Bold'}}>Adicionar ao carrinho</Text>
                </Button>

                {/* Parte dos produtos relacionados */}
                <MarginlANDr style={{marginTop: height * 0.090}}>
                    <Text style={{bottom: height * 0.005, fontFamily: 'Roboto_700Bold'}}>Produtos relacionados</Text>
                <View style={{flexGrow:1}}>
                    <FlatList 
                        data={images}
                        numColumns={2}
                        contentContainerStyle={{flex:0}}
                        nestedScrollEnabled={true}
                        renderItem={({item, index}) => (
                    <TouchableWithoutFeedback onPress={() => setClicked(item)}>
                            <Image 
                            source={item}
                            resizeMode={'cover'}
                            key={index}
                            style={{width: width/2.3, height: height * 0.2, 
                            margin: height * 0.002, right: height * 0.005}}/>
                            
                    </TouchableWithoutFeedback>
                    )}
                    />
                </View>
                </MarginlANDr>
                
            </Container>
        )
    
    }
    }
   