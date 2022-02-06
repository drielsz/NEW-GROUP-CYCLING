import React from 'react';
import { FlatList, View, Dimensions, Image } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;





const ListaHorizontal = ({data}) => {
    const [ images, setimages] = React.useState([
        require('../../assets/FEED01.png'),
        require('../../assets/FEED02.png'),
        require('../../assets/FEED03.png'),
        require('../../assets/FEED04.png'),
        require('../../assets/FEED06.png'),
        require('../../assets/FEED09.png'),
        require('../../assets/FEED07.png'),
    ])
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
        snapToOffsets={[...Array(data.length)].map((x,i) => i * (20))}
        renderItem={({item, index, separators}) => 
        <Image 
        source={item}
        key={index}
        resizeMode='cover'
        style={{
            height: height / 3.9, 
            width: width * 0.8 - 20, 
            marginHorizontal: height * 0.005235,
            // borderRadius: height * 0.012
        }}/>}
        />

    )
}

export default ListaHorizontal;


