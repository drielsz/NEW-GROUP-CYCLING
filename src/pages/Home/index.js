import React, { useState } from 'react';
import{ 
    View, 
    Dimensions,
    useColorScheme,
    PixelRatio,  
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    FlatList
 } from 'react-native';
// Cores utilizadas
import { colors } from '../../styles/colors';
// Dimensões, utilizada para fazer responsividade.
var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;
// Status Bar
import { StatusBar } from 'expo-status-bar';
// Styles
import { SafeAreaView,Header, Image, Name, Time, Description, ViewReactions, ImageReact } from './styles';
// Images
import LikePost from '../../assets/LikePost.png';
import CommentPost from '../../assets/CommentPost.png';
import SharePost from '../../assets/SharePost.png';
// Icons
import { AntDesign, MaterialCommunityIcons, Ionicons   } from '@expo/vector-icons'; 
// Global Styles
import { Avatar } from 'react-native-paper';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function RedeSocial () {  
    const deviceTheme = useColorScheme()
    const [name, setName] = useState()
    const [time, setTime] = useState()
    const [image, setImage] = useState()
    const [avatar, setAvatar] = useState()
    const [description, setDescription] = useState()
    const [like, setLike] = useState()
    const [comment, setComment] = useState()
    const dataPOST = [
        {
            id: '1',
            name: 'japadesignteam',
            time: '5 minutos atrás',
            avatar: 'https://scontent.fjdo1-2.fna.fbcdn.net/v/t1.6435-9/50580465_2017638391606530_8252417808269312000_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JNtZFfjmnJ0AX-P_DAd&_nc_ht=scontent.fjdo1-2.fna&oh=00_AT-us_N5kyztIu0zvcusRx-kXd2M8pbWBRlkBB_EAb2Q7g&oe=6255D85D',
            image: 'https://scontent.fjdo1-1.fna.fbcdn.net/v/t1.6435-9/121479260_3372896819414007_6591011002124795105_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a26aad&_nc_ohc=kYtb9n-wI1QAX_JVjkU&tn=AVLNe0r6WYk4Rgwv&_nc_ht=scontent.fjdo1-1.fna&oh=00_AT_-Z1xGKcweR0RpVqzYw1_2TfH6LDjfjRGGAXle-S92yQ&oe=625692DD',
            description: 'Fé em Deus e pé na estrada. 🇯🇵',
        },
        {
            id: '2',
            name: 'bicisport',
            time: '10 minutos atrás',
            avatar: 'https://scontent.fjdo1-2.fna.fbcdn.net/v/t1.18169-9/23380049_1680613278677713_7689168982683265136_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=l04TlUuBQRIAX85HPUj&_nc_ht=scontent.fjdo1-2.fna&oh=00_AT-GQCGN0XCKp0clRIERyWH6AOD_pn8EGdgi-Q-9Dzo7Cw&oe=6256EB63',
            image: 'https://scontent.fjdo1-2.fna.fbcdn.net/v/t39.30808-6/273011367_6878776965527959_2712571028404505464_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=vyOxbiNIPiQAX_aWfud&_nc_ht=scontent.fjdo1-2.fna&oh=00_AT-_iCIIetNd7QcZ5WOJvNzO8hRpoObVzSflr0I4AmJpfw&oe=62369AF9',
            description: 'Evade linha Sagan 🚀. Apenas R$ 2.499,90'
        },
        {
            id: '3',
            name: 'Aliciane Magalhaes',
            time: '30 minutos atrás',
            avatar: 'https://scontent.fjdo1-2.fna.fbcdn.net/v/t39.30808-6/263683640_270354478470069_6526036977273588577_n.png?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qXh4tVkz6dgAX8rsv5i&_nc_oc=AQkH6r7UU27T8wlK5ZUu8er2h8WBa5UL1cL87WOxHWt6O3CpCmY2PyjdAEVnh4FLW1tmCA9DJRLA6wB1QJduxaX1&_nc_ht=scontent.fjdo1-2.fna&oh=00_AT_d9diwB9poZ7WrcJYCh4BeAfXn5gsm8VK7G5dSJYaf1A&oe=62369F0E',
            image: 'https://scontent.fjdo1-1.fna.fbcdn.net/v/t39.30808-6/275305853_327653946073455_4256030805077518821_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=mx_sVm9yWAsAX98qhi_&_nc_ht=scontent.fjdo1-1.fna&oh=00_AT8gwTVyh1uIbXATN7p49hyLMj8LlkNMQYzBGCK9IWf5bg&oe=6236735E',
            description: 'Tudo está relacionado as mãos que você aperta 👊🏻'
        },
        {
            id: '4',
            name: 'Miquéias Gomes',
            time: '40 minutos atrás',
            avatar: 'https://scontent.fjdo1-1.fna.fbcdn.net/v/t39.30808-6/214532509_2007563236061739_5959405364409410310_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=E5Ux24THxLUAX_YM2_7&_nc_ht=scontent.fjdo1-1.fna&oh=00_AT-HodnNyhJVmPZotrhjBLKkKetJdHbZt1VuU5ZN4BvxgQ&oe=62368CD2',
            image: 'https://scontent.fjdo1-2.fna.fbcdn.net/v/t39.30808-6/200960524_2009264515891611_1962968380225355662_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=iRQn87cXp3MAX9DiK9s&_nc_ht=scontent.fjdo1-2.fna&oh=00_AT-7VbVmoMxHDaNBb5v1PE7hJmdtU45RudmXfaVaUHkpYQ&oe=6237A829',
            description: 'Equipe UCRJ-TURIM Rio de janeiro!🦿📈🙏🏾'
        },
        {
            id: '5',
            name: 'Adriel Oliveira',
            time: '50 minutos atrás',
            avatar: 'https://scontent.fjdo1-2.fna.fbcdn.net/v/t39.30808-6/272898753_1329792957500236_8397756379102866395_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Flu-bKNgpF0AX80ziX4&_nc_ht=scontent.fjdo1-2.fna&oh=00_AT9QoqXSVa_4Swiz-1qvyxkEXxHJQc3uvRPLke1LV0Ur-g&oe=6235FA83',
            image: 'https://scontent.fjdo1-2.fna.fbcdn.net/v/t1.6435-9/93282214_878881165924753_5042970248991473664_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=buvduusdakcAX_e0Zzw&_nc_oc=AQn9dlYoS6l_ty7Ve3amjlArdEATCHsebsmXJ76iAPQn51o2P3mnqMJD_eQpJggFSnIxo5wkzDQpdhYPPkLC9ap_&_nc_ht=scontent.fjdo1-2.fna&oh=00_AT_I9eA-uimAsmsZGKtyYzEeASI0WKU3OUVWkTV8CyGlZA&oe=6258A971',
            description: 'Good moments 🇧🇷'
        }
    ]

    const RenderPost = ({ item }) => (
        <ScrollView style={{flex: 1, top: height * 0.03}}>
        {deviceTheme === 'dark' ? <StatusBar style='light'/> : <StatusBar style='dark'/>}
        <View>
            <Header>
              <TouchableOpacity style={{left: height * 0.02}}>
                  <Avatar.Image size={35} source={{uri: item.avatar}}/>
              </TouchableOpacity>
              <TouchableOpacity style={{left: height * 0.036}}>
                  <Name>{item.name}</Name>
              </TouchableOpacity>
              <View style={{position:'absolute', right: height * 0.02}}>
                  <Time>{item.time}</Time>
              </View>
            </Header>
            <View style={{height: height * 0.01}}/>
            <Image resizeMode='cover' source={{uri: item.image}} style={{width: width, height: height * 0.446}}/>
              {/* Will Have three itens, View From React */}
              <ViewReactions>
                  <TouchableOpacity style={{width: height * 0.026, height: 25, justifyContent:'center', alignItems:'center'}}>
                      <Ionicons name="share-social-outline" size={25} color="#98A6A9" style={{width: 25}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{width: height * 0.026, height: 25, justifyContent:'center', alignItems:'center'}}>
                      <MaterialCommunityIcons name="comment-processing-outline" size={25} color="#98A6A9" style={{width: 25}}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: height * 0.026, height: 25, justifyContent:'center', alignItems:'center'}}>
                      <AntDesign name='hearto' color='#98A6A9' size={25} style={{width: 25}}/>
                  </TouchableOpacity>
              </ViewReactions>
            <View style={{left: height * 0.011, top: height * 0.012, height: height * 0.15, maxWidth: width - height * 0.023}}>
                <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                    <Name>{item.name}</Name>
                </TouchableOpacity>
                <Description>{item.description}</Description>
            </View>
        </View>
        </ScrollView>
      );
    return (
      <SafeAreaView>
        <FlatList
            data={dataPOST}
            renderItem={RenderPost}
            keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
}