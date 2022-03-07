import React, {useState, componentDidMount, useEffect} from 'react'; 
import { View, StyleSheet, Dimensions, TextInput, Image, TouchableWithoutFeedback, Animated} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// Importando dimensões
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
// import
import ListaHorizontal from '../../components/ListaHorizontal';
// Importando estilos
import {ScrollView, Text, Feather, Entypo, FontAwesome5, Ionicons, Header} from './styles';
// import FastImage
import FastImage from 'react-native-fast-image'
// 
import { data } from './data'

function Equipamentos({navigation}) {  
  // Scroll Animation
  let AnimatedHeaderValue = new Animated.Value(0)
  const Header_Max_Height = 110 // Max Height of the Header
  const Header_Min_Height = 50// Min Height of the Header

  const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['transparent', 'transparent'],
    extrapolate: 'clamp'
  })

  const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp'
  })

  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [clicked, setClicked] = useState(false);
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

  return(
          
    <ScrollView
    vertical
    showsVerticalScrollIndicator={false}
    scrollEventThrottle={16}
    onScroll={Animated.event(
      [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
      {useNativeDriver: false}
    )}
    >
        {/* Icons */}
    <Animated.View style={[styles.header, {
      height: animatedHeaderHeight,
      backgroundColor: animateHeaderBackgroundColor
    }]}>
        <View style={styles.icons}>
          <View style={styles.heart}>
              <FontAwesome5 name="heart" size={25}/>
          </View>
            <View>
              <Ionicons name="reorder-three-outline" size={27} />
            </View>
        </View>
        <View style={styles.searchBar__unclicked}>
          {/* Search */}
          <Feather
            name="search"
            size={20}
            color="#A4A4A4"
            style={{ marginLeft: 1 }}
          />
          <TextInput 
            allowFontScaling={false}
            placeholder='Pesquisar'
            style={styles.input}
            onChangeText={(s) => search(s)}
            autoCapitalize='none'
          />
        </View>
    </Animated.View>

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
                  loadingIndicatorSource
                  progressiveRenderingEnabled
                  resizeMethod='scale'
                  key={index}
                  style={{width: width/2, height: height * 0.3, margin: height * 0.0016}}/>
          </TouchableWithoutFeedback>
     
        )}
        />      
    </ScrollView>
  )
}


const styles= StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    padding: height * 0.03,
    
  },
  searchBar__unclicked:{
    padding: height * 0.010,
    flexDirection: "row",
    width: width - 5,
    backgroundColor: "#EFEFEF",
    borderRadius: height * 0.015,
    alignItems: "center",
    top: height * 0.015,
  },
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