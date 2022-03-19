import React, { useState } from 'react'
import {Marker, Callout}  from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from '../../services/axios'

import markerImage from '../../assets/marker.png'

const MapPointers = () => {
    const [pointers, setPointers] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    const [counter, setCounter] = useState(0)

    const incrementValue = () =>{
        console.log('TÁ CLICANDO')
        setCounter(counter + 1)
    }
    
    const handlePointers = async () => {
        let response = await api.get("events", {
            headers: {"X-access-token": await AsyncStorage.getItem("token")}
        }).then(async(response) => {
            setPointers(response.data)
        }).catch((error) => {
            console.log(error.response.data.message)
        })
    }

    setTimeout ( handlePointers, 2000)

    return (
        <>
        {pointers.length > 0 ? (
            pointers.map((item) => {
                return(
                    <Marker coordinate={{latitude: item.origin_latitude, longitude: item.origin__longitude}}
                    anchor={{x:0, y:0}}
                    key={item.id}
                    image={markerImage}
                    >
                    <Callout onPress={incrementValue}>
                        <Text allowFontScaling={false}>{item.title}</Text>
                        <Text allowFontScaling={false}>{item.description}</Text>
                        <Text allowFontScaling={false}>Participantes: {counter}</Text>
                    </Callout>
                        
                    </Marker>
        )
    })
) : (<></>)}
</>
);
}

export default MapPointers