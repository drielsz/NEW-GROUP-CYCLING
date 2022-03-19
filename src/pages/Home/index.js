import React, { useState, useEffect } from 'react';
import{ 
    View, 
    Dimensions,
    useColorScheme,
    TouchableOpacity,
    FlatList,
    Share
 } from 'react-native';
// Cores utilizadas
import { colors } from '../../styles/colors';
// Dimensões, utilizada para fazer responsividade.
var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;
// Status Bar
import { StatusBar } from 'expo-status-bar';
// Styles
import { SafeAreaView, Header, Image, Name, Time, Description, ViewReactions } from './styles';
// Images
// Icons
import { AntDesign, MaterialCommunityIcons, Ionicons   } from '@expo/vector-icons'; 
import FabButton from '../../components/FabButton'
// Global Styles
import { Avatar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
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
    const [like, setLike] = useState(false)
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
    
      const test = () => {
          setImage()
      }
      const url = "https://awesome.contents.com/";
      const title = "Awesome Contents";
      const message = "Please check this out.";
      const options = {title, message, url}
      const sharePost = async ({item}) => {
        try{
            const result = await Share.share({
                title, message, url
            })  
            if(result.action === Share.sharedAction){   
                if(result.activityType){
                    // share with activity type of result
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction){
                // dimissed
            }
        }catch (error) {
            alert(error.message)
        }
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

    console.log(like)
    const setLiking = () => {
        setLike(!like ? true : false)
    }
    const RenderPost = ({ item }) => (
        <ScrollView style={{flex: 1, top: height * 0.03}}>
        {deviceTheme === 'dark' ? <StatusBar style='light'/> : <StatusBar style='dark'/>}
        <View>
            <Header>
              <TouchableOpacity style={{left: height * 0.02}}>
                  <Avatar.Image size={35} source={{uri: item.avatar}}/>
              </TouchableOpacity>
              <TouchableOpacity style={{left: height * 0.036}} onPress={{}}>
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
                <TouchableOpacity onPress={sharePost} style={{width: height * 0.026, height: 25, justifyContent:'center', alignItems:'center'}}>
                    <Ionicons name="share-social-outline" size={25} color="#98A6A9" style={{width: 25}} />
                </TouchableOpacity>
                <TouchableOpacity style={{width: height * 0.026, height: 25, justifyContent:'center', alignItems:'center'}}>
                    <MaterialCommunityIcons name="comment-processing-outline" size={25} color="#98A6A9" style={{width: 25}}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={setLiking}  style={{ width: height * 0.026, height: 25, justifyContent:'center', alignItems:'center'}}>
                    <AntDesign name={like === true ? 'heart' : 'hearto'} color={like === true ? colors.primary : '#98A6A9'} size={25} style={{width: 25}}/>
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
        <FabButton onPress={() => navigation.navigate('AddPost')}/>
      </SafeAreaView>
    );
}