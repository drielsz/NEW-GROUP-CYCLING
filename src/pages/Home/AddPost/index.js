import React, {useState} from 'react'
import {TouchableOpacity, View, StyleSheet, TextInput, Dimensions, Image} from 'react-native'
import {SafeAreaView} from '../../Home/styles'
import {Header, TextReact, AntDesign} from '../../Perfil/EditProfile/styles'
import { colors } from '../../../styles/colors'
// Status Bar
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
// Avatar
import { Avatar } from 'react-native-paper';
// IMAGE UPLOAD
import * as ImagePicker from "expo-image-picker";
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default function AddPost ({navigation}) {
    const deviceTheme = useColorScheme()
    const [empty, setEmpty] = useState(true)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState()

    const onChangeDescription = (txtDescription) => {
        setDescription(txtDescription)
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          base64: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result.cancelled);
        if (!result.cancelled) {
          setImage(result.base64); 
        }
      };

      const PostImage = async () => {
        var response = await axios({
          method: 'POST',
          url: "https://group-cycling-backend.herokuapp.com/send-image/",
          data: {"Base64": image, "caption": description},
          headers: {"X-access-token" : await AsyncStorage.getItem("token")}
        }).then((response) => {
          console.log(response.data.message);
        }).catch((err) => {
          console.log(err);
        });
      };  
    
    return (
        <><Header style={{}}>
        <View style={{...StyleSheet.absoluteFillObject}}>
            <TextReact allowFontScaling={false} >Nova Publicação</TextReact>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{width: 60}}>
            <AntDesign name="arrowleft" size={24}/>
        </TouchableOpacity>
        <View style={{width: '100%', justifyContent:'flex-end', alignItems:'flex-end', position:'absolute', right: 20}}>
            {description === '' ?  <View/> : 
        <TouchableOpacity onPress={PostImage}>
            <AntDesign name="check" size={24}/>
        </TouchableOpacity>
        }
        </View>
        </Header>
        <SafeAreaView>
        {deviceTheme === 'dark' ? <StatusBar style='light' /> : <StatusBar style='dark' />}
        <View style={{left: 20}}>


        {/* Image */}
        {!image ? 
        <TouchableOpacity onPress={pickImage} style={{alignItems:'center', justifyContent:'center', alignSelf:'center', right: 20, width: width - 40, height: 240, backgroundColor: colors.namebutton}}/>
        :
        <Image source={{uri: image}} style={{width: width - 40, height: 240}} resizeMode='contain' />
        }



            <View style={{flexDirection:'row', top: 45}}>
                <Avatar.Image size={35} source={{uri: 'https://scontent.fjdo1-2.fna.fbcdn.net/v/t39.30808-6/272898753_1329792957500236_8397756379102866395_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Flu-bKNgpF0AX80ziX4&_nc_ht=scontent.fjdo1-2.fna&oh=00_AT9QoqXSVa_4Swiz-1qvyxkEXxHJQc3uvRPLke1LV0Ur-g&oe=6235FA83'}}/>
                {deviceTheme === 'dark' ?                 
                <TextInput style={{left: 20}} placeholder='Descrição para a sua publicação...' placeholderTextColor={'#FDFDFD'} onChangeText={onChangeDescription} color="#FDFDFD"/> : 
                
                <TextInput style={{left: 20}} placeholder='Descrição para a sua publicação...' placeholderTextColor={'#101010'} onChangeText={onChangeDescription} color="#101010"/>}

            </View>

        </View>
            {/* <Button width={height * 0.3} style={{top: height * 0.1}}>
                <Text>Publicar</Text>
            </Button> */}
        </SafeAreaView></>
    )
}