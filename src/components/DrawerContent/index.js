import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
// Drawer 
import { 
    DrawerContentScrollView,
    DrawerItem
}  from '@react-navigation/drawer';
// Importando as cores
import { colors, LabelColor } from '../../styles/colors';
// Pegando as dimensões da tela
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height
// Importando dos estilos globais
import { ImageProfile } from '../../styles';
// Styles
import { 
    Container,
    UserInfoSection,
    Title,
    Paragraph,
    Caption,
    Entypo,
    Octicons,
    Icons,
    MaterialCommunityIcons,
    Text,
    Image,
    Line
} from './styles'
// Importando do react native paper
import {
    Avatar,
    Drawer,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
// API
import { useAuth } from '../../contexts/auth';
import {api} from '../../services/axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function DrawerContent(props, state) {
    const [name, setName] = useState('')
  // Pegar o nome e email do usuario
  const getUser = async () => {
    const response = await api.get("user-info", { headers : {
     "X-access-token" : await AsyncStorage.getItem("token")
    }}).then(response => {
      setName(response.data.name)
      console.log(name)
    }).catch(err => {
      console.log(err);
    })
    }

    useEffect(() => {
    getUser()
    }, [])

    const {user, signOut} = useAuth()
    
    function handleSignOut() {
        signOut()
    }

    const  [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <Container>
            <DrawerContentScrollView {...props}>
                    <View>
                        <UserInfoSection>
                            <View style={{flexDirection: 'row', marginTop: 15}}>
                                <Avatar.Image source={require('../../assets/Perfil-picture.png')}
                                
                                />
                                <View style={{marginLeft: 15,
                                flexDirection: 'column'
                                }}>
                                    <Title allowFontScaling={false}>{name}</Title>
                                    <Caption allowFontScaling={false}>@drielsz</Caption>
                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Paragraph allowFontScaling={false} style={[styles.paragraph,
                                    styles.caption]}>
                                        80</Paragraph>
                                    <Caption allowFontScaling={false}>Seguindo</Caption>
                                        
                                </View>
                                <View style={styles.section}>
                                    <Paragraph allowFontScaling={false} style={[styles.paragraph,
                                    styles.caption]}>
                                        120</Paragraph>
                                    <Caption allowFontScaling={false}>Conquistas</Caption>            
                                </View>
                                <View style={styles.section}>
                                    <Paragraph allowFontScaling={false} style={[styles.paragraph, styles.caption
                                    ]}>
                                        320</Paragraph>
                                    <Caption allowFontScaling={false}>Seguidores</Caption>

                                </View>
                            </View>
                        </UserInfoSection>
                        {/* PARTE DOS ICONES */}
                        <Drawer.Section style={styles.drawerSection}>
                            {/* Home */}
                                <DrawerItem 
                                icon={({color, size, props}) => (
                                    <>
                                        <Entypo name='home' size={size}/>
                                        <Text>Ínicio</Text> 
                                    </>
                                )}      
                                label=''
                                onPress={() => {}}
                                />
                            {/* Pedal */}
                                <DrawerItem 
                                icon={({color, size}) => (
                                    <>
                                        <Octicons name='location' size={size} style={{}} />
                                        <Text style={{marginLeft: height * 0.035}}>Pedal</Text> 
                                    </>
                                ) }      
                                label=''
                                onPress={() => {}}
                                />
                            {/* Equipamentos */}
                                <DrawerItem 
                                icon={({color, size}) => (
                                    <>
                                    <Image
                                        source={require('../../assets/Equipaments.png')}
                                        style={{
                                            tintColor: color,
                                            width: size,
                                            height: size,
                                        }}
                                        />
                                     <Text>Equipamentos</Text> 
                                    </>
                           
                                ) }      
                                label=''
                                onPress={() => {}}
                                />
                            {/* Wish List */}
                                <DrawerItem 
                                    icon={({color, size}) => (
                                        <>
                                        <Icons 
                                            name='heart-outline' 
                                            color={color}
                                            size={size}
                                        />
                                        <Text>Wish List</Text>
                                        </>
                                ) }      
                                label=''
                                onPress={() => {}}
                                />
                            {/* Configurações */}
                                <DrawerItem 
                                icon={({color, size}) => (
                                    <>
                                    <Icons 
                                        name='cog-outline' 
                                        color={color}
                                        size={size}
                                    />
                                    <Text>Configurações</Text>
                                    </>
                                   
                                ) }      
                                 
                                    label=''
                                    onPress={() => {}}
                                    />
                            {/* Suporte */}
                                <DrawerItem 
                                icon={({color, size}) => (
                                    <>
                                     <Icons 
                                        name='account-check-outline' 
                                        color={color}
                                        size={size}
                                    />
                                    <Text>Suporte</Text>
                                    </>
                                   
                                ) }      
                                label=''
                                onPress={() => {}}
                                />
                            {/*  */}
                            <View style={{borderBottomColor: '#f4f4f4', borderBottomWidth: height * 0.001}}/>
                        </Drawer.Section>
                    </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                    {/* <DrawerItem
                        icon={({color, size}) => (
                            <>
                                <MaterialCommunityIcons name="theme-light-dark" size={size} color={color} />
                                <Text>Dark Theme</Text>
                            </>
                            
                            
                        )}
                          label=''
                          onPress={() => {}}  
                    /> */}
                    {/* <Switch  style={{position: 'absolute', alignSelf:'flex-end'}}/> */}
                    <DrawerItem 
                        icon={({color, size}) => (
                            <>
                            <Icons 
                                name='exit-to-app' 
                                color={color}
                                size={size}
                            />
                            <Text>Sair</Text>
                            </>
                        ) }      
                        label=''
                        onPress={handleSignOut}
                        />
                    <View style={{borderBottomColor: '#f4f4f4', borderBottomWidth: height * 0.001}}/>
            </Drawer.Section>
        </Container>
    )
}

const styles= StyleSheet.create ({
    locatorViewContainer: (props) => {
        borderColor: props.theme.color
    },  
    caption:{
        fontSize:height * 0.014,
        lineHeight: height * 0.014,
    },
    row:{
        marginTop: height * 0.020,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: height * 0.015
    },
    paragraph:{
        fontWeight: 'bold',
        marginRight: height * 0.003,
    },
    drawerSection:{
        marginTop: height * 0.05,
        borderTopColor: '#f4f4f4',
        borderTopWidth: height * 0.001
    },
    bottomDrawerSection:{
        marginBottom: height * 0.015,
        borderTopColor: '#f4f4f4',
        borderTopWidth: height * 0.001
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: height * 0.012,
        paddingHorizontal: height * 0.016,
    }
})