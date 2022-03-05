import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native'; 
import { Container, ViewEmoji, ViewComments, ViewBack, ViewAvatar, TextComment, TextNameProfileComment, Text, Ionicons, AntDesign, Entypo } from './styles';
// 
import Emoji01 from '../../../../assets/Emoji02.png';
import Emoji02 from '../../../../assets/Emoji01.png';
import AvatarImage from '../../../../assets/Avatar.jpg';
import AvatarImage01 from '../../../../assets/Avatar01.jpg';
import AvatarImage02 from '../../../../assets/Avatar02.jpg';
import AvatarImage03 from '../../../../assets/Avatar03.jpg';
import AvatarImage04 from '../../../../assets/Avatar04.jpg';
// Cores
import { colors } from '../../../../styles/colors';
// Importando dimensões
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
// Avatar
import { Avatar } from 'react-native-paper';


export default function Comments () {
    const [clicked, setClicked] = useState(false);
    return(
        <Container>
            <View style={!clicked ? styles.searchBar__unclicked : styles.searchBar__clicked}>
 
                <TextInput 
                    allowFontScaling={false}
                    placeholder='Comentar'
                    style={styles.input}
                />
            <View style={{flexDirection:'row', marginRight: height * 0.015}}>
                {/* Emojis */}
               <Entypo name="emoji-flirt" size={height * 0.030} style={{left: width * 0.56}}  />
                {/* Enviar mensagem */}
               <Ionicons name="send" size={height * 0.030} style={{left: width * 0.6}} />

            </View>
            </View>

            <ViewBack>
                <AntDesign name="arrowleft" size={height * 0.029} color={colors.tertiary} />
                <Text allowFontScaling={false} style={{position:'absolute',left: height * 0.065}}>Comentarios sobre</Text>
            </ViewBack>
            
        <View style={{flex:1}}>
            <ViewComments onPress={() => alert('apertei')} bottom={height * 0.70}>
                <ViewAvatar>
                    <Avatar.Image size={height * 0.07} source={AvatarImage} />
                </ViewAvatar>
                <TextNameProfileComment allowFontScaling={false}>Thiago Mendes</TextNameProfileComment>
                <TextComment allowFontScaling={false}>Qual é o tamanho da bike?</TextComment>
            </ViewComments>

            <ViewComments bottom={height * 0.56}>
                <ViewAvatar>
                    <Avatar.Image size={height * 0.07} source={AvatarImage01} />
                </ViewAvatar>
                <TextNameProfileComment allowFontScaling={false}>Leticia Alves</TextNameProfileComment>
                <TextComment allowFontScaling={false}>Onde é a loja?</TextComment>
            </ViewComments>

            <ViewComments bottom={height * 0.42}>
                <ViewAvatar>
                    <Avatar.Image size={height * 0.07} source={AvatarImage02} />
                </ViewAvatar>
                <TextNameProfileComment allowFontScaling={false}>Fernandinha Beiramar</TextNameProfileComment>
                <TextComment allowFontScaling={false}>Muito lindo e envolvente, me interessei!</TextComment>
            </ViewComments>

            <ViewComments bottom={height * 0.28}>
                <ViewAvatar>
                    <Avatar.Image size={height * 0.07} source={AvatarImage03} />
                </ViewAvatar>
                <TextNameProfileComment allowFontScaling={false}>João Fernandes</TextNameProfileComment>
                <TextComment allowFontScaling={false}>Pastel de flango</TextComment>
            </ViewComments>

            <ViewComments>
                <ViewAvatar>
                    <Avatar.Image size={height * 0.07} source={AvatarImage04} />
                </ViewAvatar>
                {/* Icone para excluir, editar e reportar */}
                {/* <Entypo style={{position:'absolute', alignSelf: 'center', top: width * 0.04, left: width * 0.2}} name="dots-three-horizontal" size={24} color="black" /> */}
                <TextNameProfileComment allowFontScaling={false}>Henrique Picasso</TextNameProfileComment>
                <TextComment allowFontScaling={false}>Tem suporte para a garrafinha?</TextComment>
            </ViewComments>
        </View>
        </Container>
    )

}

const styles = StyleSheet.create({
    searchBar__unclicked:{
        padding: height * 0.005,
        flexDirection: 'row',
        width: width  * 0.7228125000000001,
        borderRadius: height * 0.015,
        backgroundColor: colors.blind,
        alignItems: 'center',
        alignSelf:'center',
        alignSelf:'flex-start',
        marginLeft: height * 0.022,
        position:'absolute',
        bottom: height * 0.03,
        
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
        color: '#A4A4A4'
      },
})