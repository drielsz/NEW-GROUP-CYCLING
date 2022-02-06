import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { Entypo } from '@expo/vector-icons'


var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;

export default function ButtonNew ({size, color}) {
    return(
        <View style={styles.container}>
            <Entypo name='plus' size={size} color={color}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: height * 0.09, 
        height: height * 0.09,
        borderRadius: height * 0.09,
        backgroundColor: '#0e2349',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: height * 0.034 
    }
})