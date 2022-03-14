import React from 'react'
import {View, Text, Image} from 'react-native'
import FEEDIMAGE from '../../../assets/FEED010.png'

export default function ItensToCart () {
    const WIDTH_IMAGE = '45%';
    const HEIGHT_IMAGE = 150
    return (
        <View style={{flex: 1, backgroundColor: '#101010', alignItems:'flex-start', justifyContent:'flex-start', flexDirection:'row'}}>
            <View style={{width: '100%', flexDirection:'row', justifyContent:'space-evenly'}}>
                <Image source={FEEDIMAGE} style={{width: WIDTH_IMAGE, height: HEIGHT_IMAGE}} resizeMode='cover'/>
                <Image source={FEEDIMAGE} style={{width: WIDTH_IMAGE, height: HEIGHT_IMAGE}} resizeMode='cover'/>
            </View>
        </View>
    )
}