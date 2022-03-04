import React, {useState, componentDidMount, useEffect} from 'react'; 
import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableWithoutFeedback} from 'react-native';
import { FlatList, ScrollView} from 'react-native-gesture-handler';
// Importando dimensões
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
// Icones
import { Feather, Entypo, FontAwesome5, Ionicons  } from "@expo/vector-icons";
// import
import ListaHorizontal from '../../components/ListaHorizontal';
// Importando estilos
import { Container, MyBox } from './styles';
// import FastImage
import FastImage from 'react-native-fast-image'
// 
import { data } from './data'

function Equipamentos({props, navigation}) {  

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
    {
      id: 7,
      name: 'bike',
      image:   require('../../assets/BIKE-SCREEN2.png'),
    },
    {
      id: 8,
      name: 'quadros',
      image:   require('../../assets/QUADROS.png'),   
    }
  ])
  // Array original
  const [ images, setimages] = React.useState([
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
    {
      id: 7,
      name: 'bike',
      image:   require('../../assets/BIKE-SCREEN2.png'),
    },
    {
      id: 8,
      name: 'quadros',
      image:   require('../../assets/QUADROS.png'),   
    }
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
    >
      
        {/* Icons */}
      <View style={styles.icons}>
        <View style={styles.heart}>
            <FontAwesome5 name="heart" size={25} color="black" />
          </View>
          <View>
            <Ionicons name="reorder-three-outline" size={27} color="black" />
            </View>
        </View>
      <View style={ !clicked ? styles.searchBar__unclicked : styles.searchBar__clicked }>
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
        <View style={styles.text}>
          <Text allowFontScaling={false} style={{textAlign:'left', fontFamily:'Nunito_700Bold'}}>
            Em Destaque
          </Text>
      </View>

        <ListaHorizontal data={data}/>

        <FlatList 
        keyExtractor={item => String(item)}
        data={images}
        numColumns={2}
        renderItem={({item, index}) => (
          <TouchableWithoutFeedback onPress={() => setClicked(item, navigation.navigate('Buy', {
            imageData: item.image
          }))}>
                 <Image 
                  source={item.image}
                  resizeMode={'cover'}
                  key={index}
                  style={{width: width/2, height: height * 0.3, margin: height * 0.0016, right: height * 0.005}}/>
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
  searchBar__clicked:{
    padding: height * 0.010,
    flexDirection: "row",
    width: width - 20,
    backgroundColor: "#EFEFEF",
    borderRadius: height * 0.015,
    alignItems: "center",
    justifyContent: "space-evenly",
    top: height * 0.015
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