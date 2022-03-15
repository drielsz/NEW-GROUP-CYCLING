import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity, Text as Text02, Image as ImageIconTopBar, useColorScheme} from 'react-native';
// Styles do Perfil:
import {AnotherView, PrimaryView, Text, CircleToIcon} from './styles';
// Styles Global:
import {ImageProfile} from '../../styles'
import {colors} from '../../styles/colors'
import MyCarousel from '../MyCarousel';
import EditProfile from '../../assets/EditProfile.png';
import Lines from '../../assets/Lines.png';
import {Ionicons} from '@expo/vector-icons';
// Images 
import background from '../../assets/backgroundPerfil.png'
// Pegando as dimensões da tela
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
// API AsyncStorage
import {api} from  '../../services/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Perfil({navigation, props}) {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')

  // Pegar o nome e email do usuario
  const getUser = async () => {
      const response = await api.get("user-info", { headers : {
       "X-access-token" : await AsyncStorage.getItem("token")
      }}).then(response => {
        setName(response.data.name)
        setEmail(response.data.email) 
        console.log(name, email)
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getUser()
  }, [])

  const deviceTheme = useColorScheme()
  return(
      <>
      <PrimaryView source={{ uri: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>

      <View style={{ left: width / 1.52, top: height * 0.013 }}>
        <CircleToIcon>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            {deviceTheme === 'light' ? 
               <ImageIconTopBar source={EditProfile}
               style={{
                 width: width * 0.050625,
                 height: height * 0.540625,
                 left: height * 0.003,
                 tintColor: 'black'
               }} resizeMode='contain' />
              :
              <ImageIconTopBar source={EditProfile}
              style={{
                width: width * 0.050625,
                height: height * 0.540625,
                left: height * 0.003,
                tintColor: 'white'
              }} resizeMode='contain' />}
         
          </TouchableOpacity>
        </CircleToIcon>
      </View>

      <View style={{ left: width * 0.77, top: height * 0.013 }}>
        <CircleToIcon>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            {deviceTheme === 'light' ?  <Ionicons name="ios-reorder-three-outline" size={30} color="black" /> 
            :
            <Ionicons name="ios-reorder-three-outline" size={30} color="white" />
            }
          </TouchableOpacity>
        </CircleToIcon>
      </View>
    </PrimaryView><AnotherView style={styles.anotherView}>
        <ImageProfile source={{ uri: 'https://scontent.fjdo1-2.fna.fbcdn.net/v/t39.30808-6/272898753_1329792957500236_8397756379102866395_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Flu-bKNgpF0AX8ZGuM1&_nc_ht=scontent.fjdo1-2.fna&oh=00_AT9vJ6Lplw-cggkpAQf8NuFbcmliAFW1ibbG2MneYJ1CwQ&oe=6235FA83' }} />

        {/* <View style={{position: 'absolute', left: height * 0.08, top: height * -0.0255}}>
      <Text  size={height * 0.0290625} style={{position: 'absolute', fontFamily: 'Roboto_900Black'}}>254
      <Text size={height * 0.024} style={{fontFamily: 'Roboto_500Medium'}}>{'\n'}Seguindo</Text></Text>
    </View>

    <View style={{position: 'absolute', right: height * 0.08, top: height * -0.0255}}>
      <Text  size={height * 0.0290625} style={{position: 'absolute', fontFamily: 'Roboto_900Black'}}>455
      <Text size={height * 0.024} style={{fontFamily: 'Roboto_500Medium'}}>{'\n'}Seguidores</Text></Text>
    </View> */}

        <Text allowFontScaling={false} style={{ fontFamily: 'Nunito_700Bold' }}>{name}</Text>
        <Text
          allowFontScaling={false}
          style={{ fontFamily: 'Nunito_400Regular' }}
          size={height * 0.02}
          margin={height * 0.003}
        >
          {email}</Text>

        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text02 allowFontScaling={false} color={colors.namebutton}
              style={{ fontFamily: 'Roboto_900Black', fontSize: height * 0.0225, color: colors.namebutton }}>SEGUIR</Text02>
          </TouchableOpacity>
        </View>

        <Text allowFontScaling={false} size={height * 0.0225} style={{
          fontFamily: 'Roboto_500Medium', left: width * 0.59, top: height * 0.24,
          position: 'absolute'
        }}>Mensagem</Text>

        <MyCarousel />
      </AnotherView>
      </>

    )
}



const styles= StyleSheet.create({
  anotherView:{
    borderTopLeftRadius: width * 0.09,
    borderTopRightRadius: width * 0.09,
  },
  container: {
    flex: 0.2, // POSSIVEL BUG DE RESPONSIVIDADE. 
    justifyContent: 'center',
    paddingHorizontal: height * 0.016,
    top: height * 0.02000,
    right: height * 0.09
  },
  button:{
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${colors.primary}`,
    borderRadius: height * 0.02,
    width: height * 0.1875,
    height: height * 0.0953125000000001,
  },
  circle:{
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin: height * 0.04,
    width: 33,
    height: 33,
    borderRadius: 33,
    backgroundColor: `${colors.secondary}`,
    position: 'absolute',
  }
});

export default Perfil