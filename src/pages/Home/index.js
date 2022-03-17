import React, { useState, useEffect } from 'react';
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
import { SafeAreaView, Header, Image, Name, Time, Description, ViewReactions, ImageReact } from './styles';
// Images
import LikePost from '../../assets/LikePost.png';
import CommentPost from '../../assets/CommentPost.png';
import SharePost from '../../assets/SharePost.png';
// Icons
import { AntDesign, MaterialCommunityIcons, Ionicons   } from '@expo/vector-icons'; 
// Global Styles
import { Avatar } from 'react-native-paper';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
// Api
import {api} from '../../services/axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RedeSocial ({navigation}) {  
    const deviceTheme = useColorScheme()
    const [name, setName] = useState()
    const [time, setTime] = useState()
    const [image, setImage] = useState()
    const [avatar, setAvatar] = useState()
    const [description, setDescription] = useState()
    const [like, setLike] = useState()
    const [comment, setComment] = useState()
    const [post, setPost] = useState()
    const [refresh, setRefresh] = useState(false)

    const getPost = async () => {
        const response = await api.get("posts", { headers :{
            "X-access-token" : await AsyncStorage.getItem("token")
        }}).then(response => {
            setPost(response.data)
          }).catch(err => {
            console.log(err.data);
          })
    }

      const getUser = async () => {
        const response = await api.get("user-info", { headers : {
         "X-access-token" : await AsyncStorage.getItem("token")
        }}).then(response => {
          setName(response.data.name)
        }).catch(err => {
          console.log(err);
        })
        }
        
        const handleRefresh = ( ) => {
            setRefresh(true)

        }

    useEffect(() => {
        getPost()
        getUser()
        setInterval(() => {setRefresh(false)}, 5000) 
    }, [])

    const RenderPost = ({ item }) => (
        <ScrollView style={{flex: 1, top: height * 0.03}}>
        {deviceTheme === 'dark' ? <StatusBar style='light'/> : <StatusBar style='dark'/>}
        <View>
            <Header>
              <TouchableOpacity style={{left: height * 0.02}}>
                  <Avatar.Image size={35} source={{uri: item.avatar}}/>
              </TouchableOpacity>
              <TouchableOpacity style={{left: height * 0.036}} onPress={() => navigation.navigate('AddPost')}>
                  <Name>{name}</Name>
              </TouchableOpacity>
              <View style={{position:'absolute', right: height * 0.02}}>
                  <Time>5 minutos atrás</Time>
              </View>
            </Header>
            <View style={{height: height * 0.01}}/>
            {/* Image */}   
            <Image resizeMode='cover' source={{uri: 'https://group-cycling.s3.sa-east-1.amazonaws.com/'+item.image_url}} style={{width: width, height: height * 0.446}}/>
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
                    <Name>{name}</Name>
                </TouchableOpacity>
                <Description>{item.caption}</Description>
            </View>
        </View>
        </ScrollView>
      );
    return (
      <SafeAreaView>
        <FlatList
            data={post}
            renderItem={RenderPost}
            keyExtractor={item => item.id}
            refreshing={refresh}
            onRefresh={handleRefresh}
        />
      </SafeAreaView>
    );
}