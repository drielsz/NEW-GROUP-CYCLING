import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
// React
// carrossel das imagens
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';
//  DATA = imagens do carrossel
import { DATA } from './data'
// Cores usada 
import { colors } from '../../styles/colors';

// Pegando as dimensões da tela
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);


  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  

  useEffect(() => {
    setEntries(DATA);
  }, []);


  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
            source={{ uri: item.illustration }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps} />
        <View style={styles.pagination}>
            {DATA.map((_, item) => {
                return (
                    <View
                        key={item}
                        style={[styles.dot]}/>
                );
            })}
        </View>
        </View>
        
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
      </TouchableOpacity>
      <Carousel
        sliderWidth={width}
        sliderHeight={height}
        itemWidth={width - 150}
        itemHeight={height - 150}
        data={DATA}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    position:'absolute',
    top: height * 0.05,
    width: width - 150,
    height: width - 150,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: height * 0.008,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
    pagination:{
        // flexDirection: 'row',
        // top: height * 0.02,
        // justifyContent: 'center',
        
    },
    dot: {
        // margin: width * 0.005,
        // width: 10,
        // height: 10,
        // borderRadius: 13,
        // backgroundColor: `${colors.primary}`,
    }
});