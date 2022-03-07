import React, { useState, useEffect } from 'react';
import { Button, View, TouchableOpacity, Image, Dimensions, StyleSheet, Platform, ImageBackground, TextInput } from 'react-native';
import { ImageProfile } from '../../../styles';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Title, Caption, Avatar, Text, TouchableRipple} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated';

import { colors } from '../../../styles/colors';

const {width, height} = Dimensions.get('window')

export default function EditProfile() {
  const [image, setImage] = useState(null);
  
 

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };    

   function RenderInner()  {
       return(
           <View style={styles.panel}>
               <View style={{alignItems:'center'}}>
                <Text style={styles.panelTitle}>
                    Atualizar a foto
                </Text>
                <Text style={styles.panelSubtitle}>
                    Escolha sua miniatura de perfil
                </Text>
               </View>
               <TouchableOpacity style={styles.panelButtom}>
                   <Text style={styles.panelButtomTitle}>Tirar Uma Foto</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.panelButtom} onPress={pickImage}>
                   <Text style={styles.panelButtomTitle}>Escolher Da Galeria</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.panelButtom} onPress={() => bs.current.snapTo(1)}>
                   <Text style={styles.panelButtomTitle}>Cancelar</Text>
               </TouchableOpacity>
           </View>
       )
   }


  function RenderHeader  ()  {
      return (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}>
                    
                </View>
            </View>
        </View>
      )
}

  var bs = React.createRef()

  var fall = new Animated.Value(1)

  return (
    <SafeAreaView style={styles.container}>
        <BottomSheet 
            ref={bs}
            snapPoints={[330, 0]}
            renderContent={RenderInner}
            renderHeader={RenderHeader}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction
        />
        <Animated.View style={{margin: 20, opacity: Animated.add(0.5, Animated.multiply(fall, 1.0))}}>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                    <View style={styles.viewStyle}>
                        <ImageBackground
                            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6xHwZck5v7nMjMdmZ4sOWDbaIl29HGVnBw&usqp=CAU'}}
                            style={{width: 100, height: 100}}
                            imageStyle={{borderRadius:15}}
                        >
                        <View style={styles.viewCameraIcon}>
                            <Icon name="camera" size={35} color="#FFF" style={styles.styleCameraIcon}/>
                        </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
                <Text style={styles.textName}>Adriel Laurentino</Text>
            </View>
            <View style={{top: 55}}>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} style={{marginTop: 3}}/>
                    <TextInput placeholder='Nome' placeholderTextColor='#666666' style={styles.textinput} autoCorrect={false} />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="envelope-o" size={20} style={{marginTop: 3}}/>
                    <TextInput placeholder='Email' keyboardType='email-address' placeholderTextColor='#666666' style={styles.textinput} autoCorrect={false} />
                </View>
            </View>
            <TouchableOpacity style={styles.commandButton}>
                <Text style={styles.panelButtomTitle}>Atualizar os dados</Text>
            </TouchableOpacity>
        </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
textName:{
    marginTop: 10,
    fontSize: 18,
    fontWeight:'bold'
},
viewCameraIcon:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
styleCameraIcon:{
    opacity: 0.7,
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
},
viewStyle:{
    height:100,
    width: 100,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
},  
container: {
    flex:1,
    backgroundColor: '#fafafa'
},
commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    marginTop: 100
},
panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
},
header:{
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4
},
panelHeader:{
    alignItems:'center'
},
panelHandle:{
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10
},
panelTitle:{
    fontSize: 27,
    height: 35,
},
panelSubtitle:{
    fontSize:14,
    color:'gray',
    height: 30,
    marginBottom: 10
},
panelButtom:{
    padding: 13,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    marginVertical: 7,
},
panelButtomTitle:{
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
},
action:{
    flexDirection:'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 5,
},
actionError:{
    flexDirection:'row',
    marginTop: 10,
    borderBottomWidth:1,
    borderBottomColor: '#FF0000',
    paddingBottom:5
},
textinput:{
    flex:1,
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 20,
    color:  '#05375a'
}
})