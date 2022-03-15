import React, {useState, useEffect} from 'react'; 
import { View, StyleSheet, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity, useColorScheme} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// Importando dimensões
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
// Horizontal List of equipaments
import ListaHorizontal from '../../components/ListaHorizontal';
// Import styles and icons
import {ScrollView, Text, TextInput} from './styles';
import { Octicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import equipaments from '../../assets/Equipaments.png'
// Colors
import {colors} from '../../styles/colors'

function Equipamentos({navigation}) {  
  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  // Controller
  const [heartClicked, setHeartClicked] = useState(false);
  const [clicked, setClicked] = useState(false)
  // Array de backup
  const [originalImages, setOriginalImages] = useState([
    {
      id: 1,
      name: 'specialized',
      image: require('../../assets/FEED08.png'),
    },
    {
      id: 2,
      name: 'menscreen',
      image: require('../../assets/MENSCREEN.png'),
    },
    {
      id: 3,
      name: 'quadro',
      image:  require('../../assets/BIKE-SCREEN2.png'),
    },
    {
      id: 4,
      name: 'quadro-specialized',
      image:  require('../../assets/QUADROBIKE.png'),
    },
    {
      id: 5,
      name: 'mulher-bike',
      image:   require('../../assets/WOMAN01.png'),
    },
    {
      id: 6,
      name: 'mulher',
      image:   require('../../assets/WOMAN02.png'), 
    },
  ])
  // Array original
  const [ images, setimages] = useState([
    {
      id: 1,
      name: 'Specialized SL7 Comp 2022',
      price: '50.000,00',
      image: require('../../assets/FEED08.png'),
    },
    {
      id: 2,
      name: 'Macacão bicisport',
      price: '250,00',
      image: require('../../assets/MENSCREEN.png'),
    },
    {
      id: 3,
      name: 'Quadro Specialized',
      price: '349,00',
      image:  require('../../assets/BIKE-SCREEN2.png'),
    },
    {
      id: 4,
      name: 'Mountain Bike Specialized 2022',
      price: '3500,00',
      image:  require('../../assets/QUADROBIKE.png'),
    },
    {
      id: 5,
      name: 'Capacete Specialized',
      price: '950,00',
      image:   require('../../assets/WOMAN01.png'),
    },
    {
      id: 6,
      name: 'Sapatilha Specialized',
      price: '650,00',
      image:   require('../../assets/WOMAN02.png'), 
    },
  ])


  // useEffect(() => {
  //   fetch(images)
  //   .then((response) => response.json())
  //   .then((json) => {
  //     setOriginalImages(json)
  //     setimages(json)
  //   })
  // },[])

  function search (s) {
    var arr = JSON.parse(JSON.stringify(originalImages))
    setimages(arr.filter(d => d.name.includes(s)))
  }

  // Theme
  const deviceTheme = useColorScheme()
  useEffect(() => {
    console.log(deviceTheme)
  },[]) 

  return(
          
    <ScrollView
    vertical
    showsVerticalScrollIndicator={false}
    >
        {/* Icons */}
    <View style={{top: 5}}> 
        <View style={{width: width, height: height * 0.08, top: height * 0.018, alignItems: 'flex-end', justifyContent: 'center'}}>
          <View style={{marginHorizontal: height * 0.02}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', width: width / 3.5}}>
              <TouchableOpacity onPress={() => navigation.navigate('ItensToCart')}>
                {/* Icon */}
                {deviceTheme === 'dark' ? <Image source={equipaments} style={{width: 28, height: 28, tintColor: 'white'}} resizeMode='contain'/>
                :
                <Image source={equipaments} style={{width: 28, height: 28, tintColor: colors.name101010}} resizeMode='contain'/>
                }
                
              </TouchableOpacity>

              <TouchableOpacity>
                {/* Icon */}
                {deviceTheme === 'dark' ? <AntDesign name={'hearto'} size={28} color={colors.blind}/> 
                :
                <AntDesign name={'hearto'} size={28} color={colors.name101010}/>
                }
                
              </TouchableOpacity>

              <TouchableOpacity>
                {/* Icon */}
                {deviceTheme === 'dark' ? <Octicons name="three-bars" size={28} color={'white'}/>
                :
                <Octicons name="three-bars" size={28} color={colors.name101010}/>
                }
              </TouchableOpacity>
            </View>
          </View>
        </View>
      {/* Input here */}
      <TextInput 
      allowFontScaling={false}
      placeholder='Pesquise aqui...'
      onChangeText={(s) => search(s)}
      autoCapitalize='none'
      />
    </View>

        <View style={styles.text}>
          <Text allowFontScaling={false} style={{textAlign:'left', fontFamily:'Nunito_700Bold'}}>
            Em Destaque
          </Text>
      </View>


        <ListaHorizontal 
        onPress={item => navigation.navigate('Buy', {
          imageData: item.image
        })}/>

        <FlatList 
        keyExtractor={item => String(item)}
        data={images}
        numColumns={2}
        renderItem={({item, index}) => (
          <TouchableWithoutFeedback onPress={() => setClicked(item, navigation.navigate('Buy', {
            imageData: item.image,
            imageTitle: item.name,
            imagePrice: item.price
          }))}>
                 <Image 
                  source={item.image}
                  fadeDuration={400}
                  progressiveRenderingEnabled
                  resizeMethod='scale'
                  key={index}
                  style={{width: width/2.028, height: height * 0.3, margin: height * 0.0016}}/>
          </TouchableWithoutFeedback>
     
        )}
        />      
    </ScrollView>
  )
}


const styles= StyleSheet.create({
  input:{
    marginLeft: height * 0.02,
    color: '#A4A4A4',
    fontFamily: 'Nunito_700Bold'
  },
  icons:{
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: height * 0.01,
    marginTop: height * 0.03,
  },
  heart:{
    right: height * 0.02
  },
  text:{
    alignSelf:'flex-start',
    top: height * 0.04,
    marginLeft: height * 0.010
  },
  item: {
    top: height * 0.010,
    width: width / 4,
    height: height * 0.15,
    flexGrow: height * 0.001,
    margin: height * 0.005,
    flexBasis: null,
  },
});

export default Equipamentos;