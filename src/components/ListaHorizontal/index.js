import React, {useState, useEffect} from 'react';
import { FlatList, View, Dimensions, Image, ScrolLView } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const ListaHorizontal = ({data}) => {

    // Images
    const [ images, setimages] = useState([
        require('../../assets/FEED01.png'),
        require('../../assets/FEED02.png'),
        require('../../assets/FEED03.png'),
        require('../../assets/FEED04.png'),
        require('../../assets/FEED06.png'),
        require('../../assets/FEED09.png'),
        require('../../assets/FEED07.png'),
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
            snapToAlignment='center'
            renderItem={({item, index, separators}) => 
        <Image 
            source={item}
            key={index}
            resizeMode='cover'
            style={{
                height: CARD_HEIGHT, 
                width: CARD_WIDTH,
                margin: height * 0.0016
                // borderRadius: height * 0.012
        }}/>}
        />

    )
}

export default ListaHorizontal;


