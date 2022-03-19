import React from 'react';
import {View, Animated, Dimensions} from 'react-native'
import {FabViwer, FeatherIcon, MaterialI, AntDesignIcon} from './styles'

var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;

export default function FabButton ({navigation, onPress}) {
    var open = 0;
    const animation = new Animated.Value(0)
    const toggleMenu = () => {
        const toValue = open ? 0 : 1

        Animated.spring(animation, {
            useNativeDriver: true,
            toValue,
            friction: 6,
        }).start()

        open = !open
    }
    
    const postStyle = {
        transform: [
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange: [0,1],
                    outputRange: [0, -height * 0.001]
                })
            }
        ]
    }
    
    const searchStyle = {
        transform: [
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange: [0,1],
                    outputRange: [0, -height * 0.002]
                })
            }
        ]
    }

    const transform = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0,1],
                    outputRange: ["0deg", "45deg"]
                })
            }
        ]
    }

    return(
    <View>
      <FabViwer onPress={() => console.log('Pressed')} bottom={height * 0.16} style={[searchStyle]}>
          <AntDesignIcon name="search1" size={24} />
      </FabViwer>
      <FabViwer onPress={onPress} bottom={height * 0.09} style={[postStyle]}>
          <MaterialI name="post-add" size={24} />
      </FabViwer>
      <FabViwer onPress={toggleMenu} style={[transform]}>
          <FeatherIcon name="plus" size={24} />
      </FabViwer>
    </View>
    )
}