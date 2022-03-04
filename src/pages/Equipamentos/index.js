import React, {useState, componentDidMount} from 'react'; 
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
  
  const [ images, setimages] = React.useState([
    require('../../assets/FEED08.png'),
    require('../../assets/MENSCREEN.png'),
    // require('../../assets/BIKE-SCREEN2.png'),
    require('../../assets/QUADROBIKE.png'),
    require('../../assets/WOMAN01.png'),
    // require('../../assets/WOMAN02.png'), 
        // require('../../assets/BIKE-SCREEN2.png'),
        require('../../assets/QUADROBIKE.png'),
        require('../../assets/WOMAN01.png'),
        // require('../../assets/WOMAN02.png'),   
  ])


  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [clicked, setClicked] = useState(false);
  
  return(
          
    <ScrollView
    vertical
    data={images}
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
          placeholder='Pesquisar'
          style={styles.input}
        />
      </View>
        <View style={styles.text}>
          <Text style={{textAlign:'left', fontFamily:'Nunito_700Bold'}}>
            Em Destaque
          </Text>
      </View>

        <ListaHorizontal data={data}/>

        <FlatList 
        data={images}
        numColumns={2}
        renderItem={({item, index}) => (
          <TouchableWithoutFeedback onPress={() => setClicked(item, navigation.navigate('Buy', {
            imageData: item
          }))}>
                 <Image 
                  source={item}
                  resizeMode={'cover'}
                  key={index}
                  style={{width: width/2, height: height * 0.3, margin: height * 0.005, right: height * 0.005}}/>
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