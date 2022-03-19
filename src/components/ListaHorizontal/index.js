import React, {useState} from 'react';
import { FlatList, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

function ListaHorizontal ({onPress, style, navigation}) {
    const [clicked, setClicked] = useState()
    // Images
    const [ images, setimages] = useState([
        {
            id: 1,
            name: 'Specialized SL7 Comp 2022',
            price: '50.000,00',
            image: require('../../assets/FEED01.png'),
          },
          {
            id: 2,
            name: 'Macacão bicisport',
            price: '250,00',
            image: require('../../assets/FEED02.png'),
          },
          {
            id: 3,
            name: 'Quadro Specialized',
            price: '349,00',
            image:  require('../../assets/FEED03.png'),
          },
          {
            id: 4,
            name: 'Mountain Bike Specialized 2022',
            price: '3500,00',
            image:  require('../../assets/FEED04.png'),
          },
          {
            id: 5,
            name: 'Capacete Specialized',
            price: '950,00',
            image:    require('../../assets/FEED06.png'),
          },
          {
            id: 6,
            name: 'Sapatilha Specialized',
            price: '650,00',
            image:   require('../../assets/FEED09.png'), 
          },
    ])

    const CARD_WIDTH = width * 0.8 - 20
    const CARD_HEIGHT = height / 3.9

    return(
        <FlatList
            data={images}
            keyExtractor={item => String(item)}
            snapToAlignment='start'
            scrollEventThrottle={height * 0.016}
            decelerationRate={'fast'}
            style={{marginTop: height * 0.05}}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({index, item}) => (
                <>
                <TouchableWithoutFeedback onPress={onPress}>
                    <Image
                        source={item.image}
                        key={index}
                        resizeMode='cover'
                        style={{height: CARD_HEIGHT, width: CARD_WIDTH, margin: height * 0.0016}} 
                    />
                </TouchableWithoutFeedback>
                </>
            )}
        />
    )
}

export default ListaHorizontal;


