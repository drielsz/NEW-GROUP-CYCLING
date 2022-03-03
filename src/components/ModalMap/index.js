import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Text, Button, TextInput, Picker, Controller} from 'react-native';
import {useForm} from 'react-hook-form'
import { api } from '../services/sqlite/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";


function ModalComponent (props) {
    const {
        control,
        handleSubmit,
        formState: {errors, isValid}
      } = useForm({mode: 'onBlur'})

    const createEvent = async (data) => {
        const response = await api.post("events/create", {
            title: data.name,
            description: `Intensidade do treino: ${selectedIntensify}; Tipo de estrada: ${selectedtyperote}; Tipo de bike: ${selectedbike} e estilo de encontro: ${selectedmeeting}.`,
            origin: props.pointers.origin,
            destination: props.pointers.destination
        }, { headers: { "X-access-token": await AsyncStorage.getItem("token") } });

        console.log(response.data);
    };

    const onSubmit = (data) => {
        
        createEvent(data);
        setModalVisible(false);
    };

    const { register, formState: { error } } = useForm();

    const [text, setText] = React.useState('');
    const [estilo, setEstilo] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [selectedIntensify, setSelectedIntensify] = useState('Suave');
    const [intensify] = useState(
        [
        'Suave',    
        'Moderado',
        'Intenso',
        ]
    );

    const [selectedtyperote, setSelectedTyperote] = useState('Estrada');
    const [type] = useState(
        [
        'Estrada', 
        'Trilha',
        'Ambas'
        ]
    )

    const [selectedbike, setSelectedbike] = useState('Speed');
    const [bike] = useState(
        [
        'Speed',
        'Mountain Bike',
        'Ambas'
        ]
    );

    const [selectedmeeting, setSelectedmeeting] = useState('Passeio');
    const [meeting] = useState(
        [
            'Passeio',
            'Treino'
        ]
    );


    const [isModalVisible, setModalVisible] = useState(false);   
    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    const { height, width} = Dimensions.get('window');

    return(
        <View style={{ flex: 1 }}>

            <Text>Tipo de rota:</Text>
            <Picker                
            selectedValue={selectedtyperote}
            onValueChange={(itemVal) => {
            setSelectedTyperote(itemVal)
                 }}
                 >
                {
            type.map((t) => (
            <Picker.Item label={t} value={t} />
                    ))
          }
            </Picker>
            <Text>Tipo de bike:</Text>
            <Picker
            style={{bottom: 10}}
            selectedValue={selectedbike}
            onValueChange={(itemVal) => {
            setSelectedbike(itemVal)
               }}
                >
                {
             bike.map((b) => (
             <Picker.Item label={b} value={b} />
             ))
               }

             </Picker>
             <Text style={{marginVertical: 20, marginLeft:5 }}>Estilo de encontro:</Text>
                            <Picker
                            style={{bottom: 10}}
                            selectedValue={selectedmeeting}
                            onValueChange={(itemVal) => {
                                setSelectedmeeting(itemVal)
                            }}
                            >
                                {
                                    meeting.map((e) => (
                                        <Picker.Item label={e} value={e} />
                                        ))
                                }
                            </Picker>
                            
                            <Text style={{marginVertical: 20, marginLeft:5 }}>Intensidade:</Text>
                            <Picker
                            style={{ marginVertical: 20, bottom: 25}}
                            selectedValue={selectedIntensify}
                            onValueChange={(itemVal) => {
                                setSelectedIntensify(itemVal);
                            }} 
                            >
                            {
                                intensify.map((l) => (
                                    <Picker.Item label={l} value={l} />
                                ))
                            }
                            </Picker>

                            <TextInput
                                style={{marginVertical: 20, marginLeft: 5, color:'black'}}
                                placeholder='Título'
                                placeholderTextColor='gray'
                            /> 
                            <Button title="Show modal" onPress={toggleModal} />
        <Modal style={{alignSelf: 'center'}} isVisible={isModalVisible}>
          <View style={{ width: 150, height: 150, backgroundColor: 'white', justifyContent:'center', alignItems:'center'}}>
            <Text>MODAL BUCETUDO</Text>
          </View>
        </Modal>
      </View>
    );
}



export default ModalComponent;