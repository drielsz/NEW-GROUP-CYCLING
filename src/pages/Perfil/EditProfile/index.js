import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  Platform,
  ImageBackground,
  TextInput,
  useColorScheme
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { ImageProfile } from "../../../styles";
// Icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
// 
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
// Colors and styles
import { SafeAreaView, Text, Caption, FontAwesomeIcon, Header, TextReact, AntDesign, ViewFromBottomSheetContent } from "./styles";
import { colors } from "../../../styles/colors";
// API AsyncStorage
import { api } from "../../../services/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// IMAGE UPLOAD
import * as ImagePicker from "expo-image-picker";

const { width, height } = Dimensions.get("window");

export default function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [response, setResponse] = useState("You should see new response here");

  // to take name and email 
  const getUser = async () => {
    const response = await api
      .get("user-info", {
        headers: {
          "X-access-token": await AsyncStorage.getItem("token"),
        },
      })
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        console.log(name, email);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result.cancelled);
    if (!result.cancelled) {
      setImage(result.uri); 
    }
  };

  var files = new FormData();

  const PostImage = async () => {
    console.log(`===${image}===`)
    files.append('images', image)
    console.log(files)
    const response = await api.post("send-image", files, { headers : {
      "Content-Type": "multipart/form-files",
    }}).then (async (response) => {
        console.log('Sucesso')
    }).catch ((error) => {
        console.log(error.response)
    }
    )
}


  const handleProgress = (event) => {
    setUploading(Math.round((event.loaded * 100) / event.total));
  };
  
  // After Bottom Sheet appear
  function RenderInner() {
    return (
      <ViewFromBottomSheetContent>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.panelTitle}>Atualizar a foto</Text>
          <Text style={styles.panelSubtitle}>
            Escolha sua miniatura de perfil
          </Text>
        </View>
        <TouchableOpacity style={styles.panelButtom}>
          <Text style={styles.panelButtomTitle}>Tirar Uma Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButtom} onPress={pickImage}>
          <Text style={styles.panelButtomTitle}>Escolher Da Galeria</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButtom}
          onPress={() => bs.current.snapTo(1)}
        >
          <Text style={styles.panelButtomTitle}>Cancelar</Text>
        </TouchableOpacity>
      </ViewFromBottomSheetContent>
    );
  }

  // This appear when bottom sheet dont is activated
  function RenderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle}>

          </View>
        </View>
      </View>
    );
  }

  var bs = React.createRef();
  var fall = new Animated.Value(1);

  function ShowBottomSheet() {
    bs.current.snapTo(0);
  }

  //   const submitImageProfile = async () => {
  //     const uploadUri = image;
  //     let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1)

  //     setUploading(true)

  //     try{
  //         await storage().ref(filename).putFile(uploadUri)
  //         setUploading(false)
  //         Alert.alert('Image uploaded', 'Your image has been uploaded to the Firebase')
  //     }catch (e){
  //         console.log(e)
  //     }
  //     setImage(null)
  //   }
  const deviceTheme = useColorScheme()
  return (
    <><Header>
      <View style={{...StyleSheet.absoluteFillObject}}>
        <TextReact>Edite o seu Perfil</TextReact>
      </View>
      <AntDesign name="arrowleft" size={24} color="black" />
    </Header>
    <SafeAreaView>
      {deviceTheme === 'dark' ? <StatusBar style="light"/> : <StatusBar style="dark"/>}
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={RenderInner}
        renderHeader={RenderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction 
        />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.5, Animated.multiply(fall, 1)),
        }}
      >
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={ShowBottomSheet}>
            <View style={styles.viewStyle}>
              {image ? (
                <ImageBackground
                  source={{ uri: image }}
                  style={{ width: 100, height: 100 }}
                  imageStyle={{ borderRadius: 15 }}
                >
                  <View style={styles.viewCameraIcon}>
                    <Icon
                      name="camera"
                      size={35}
                      color="#FFFFFF"
                      style={styles.styleCameraIcon} />
                  </View>
                </ImageBackground>
              ) : (
                <ImageBackground
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6xHwZck5v7nMjMdmZ4sOWDbaIl29HGVnBw&usqp=CAU",
                  }}
                  style={{ width: 100, height: 100 }}
                  imageStyle={{ borderRadius: 15 }}
                >
                  <View style={styles.viewCameraIcon}>
                    <Icon
                      name="camera"
                      size={35}
                      color="#FFFFFF"
                      style={styles.styleCameraIcon} />
                  </View>
                </ImageBackground>
              )}
            </View>
          </TouchableOpacity>

          <Text>{name}</Text>
          <Caption>{email}</Caption>
          <Caption>Uploaded {uploading}%</Caption>
        </View>

        <View style={{ top: 55 }}>
          <View style={styles.action}>
            <FontAwesomeIcon name="user-o" size={20} />
            {deviceTheme === 'dark' ?   
            <TextInput
              placeholder="Nome"
              placeholderTextColor="#FFFFFF"
              style={styles.textinput}
              autoCorrect={false}
              onChangeText={(text) => setName(text)} />
              :
              <TextInput
              placeholder="Nome"
              placeholderTextColor="#666666"
              style={styles.textinput}
              autoCorrect={false}
              onChangeText={(text) => setName(text)} /> 
              }
           
          </View>
          <View style={styles.action}>
            <FontAwesomeIcon name="envelope-o" size={20} />
            {deviceTheme === 'dark' ? 
              <TextInput
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#FFFFFF"
              style={styles.textinput}
              autoCorrect={false}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none" />
            :
            <TextInput
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#666666"
            style={styles.textinput}
            autoCorrect={false}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none" />
            }

          </View>
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={PostImage}>
          <Text style={styles.panelButtomTitle}>Atualizar os dados</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView></>
  );
}

const styles = StyleSheet.create({
  viewCameraIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  styleCameraIcon: {
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
  },
  viewStyle: {
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    marginTop: 100,
  },
  panel: {
    padding: 20,
    backgroundColor: "#101010",
    paddingTop: 20,
  },
  header: {
    backgroundColor: "#101010",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: height * 0.040,
    borderRadius: 4,
    backgroundColor: "#101010",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButtom: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtomTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textinput: {
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 20,
    color: "#05375a",
  },
});
