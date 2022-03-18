import styled from 'styled-components/native'
// Dimensões da tela do usuario, reponsavel por responsavidade
import { Dimensions, ImageBackground as ImageReactBackground, Text as TextReact, Image as ImageFromReact, TouchableOpacity} from 'react-native';
import { colors } from '../../styles/colors'
// Complementação do Dimensions, estou pegando a largura e altura do celular do usuario e multiplicando por frações para fazer a responsividade.
var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;
// Safe area View, responsavel por os componentes dentro do aplicativo em lugares seguros, ou seja, não deixar um texto no topo
// em cima de alguma coisa.
import { SafeAreaView as SafeAreaContext } from 'react-native-safe-area-context';
import {TouchableRipple} from 'react-native-paper'
import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons'; 

export const AntDesignIcon = styled(AntDesign)`
    color: ${(props) => props.color || props.theme.background};
`

export const MaterialI = styled(MaterialIcons)`
    color:${(props) => props.color || props.theme.background};
`
export const FeatherIcon = styled(Feather)`
    color: ${(props) => props.color || props.theme.background};
`

export const FabViwer = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2000;
    bottom: ${(props) => props.bottom || height * 0.02}px;
    right: ${(props) => props.right || height * 0.02};
    background-color: ${(props) => props.bg || props.theme.color};
    width: ${(props) => props.size || 55}px;
    height: ${(props) => props.size || 55}px;
    border-radius: 35px;
`