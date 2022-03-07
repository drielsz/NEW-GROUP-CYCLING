import styled from 'styled-components';
import {Text as TextProps} from 'react-native'
// Icons
import { Feather as FeatherIconProps, FontAwesome5 as FontAwesome5IconProps, Ionicons as IoniconsIconProps  } from "@expo/vector-icons";
// Importando dimensões
import { Dimensions,  } from 'react-native'
import {ScrollView as ScrollViewGesture} from 'react-native-gesture-handler';
// constatando dimensões
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height

export const Header = styled.View`

`


export const ScrollView = styled(ScrollViewGesture)`
    flex:1;
    background-color: ${props => props.theme.background};
    /* top:${(props) => props.top || height * 0.03} */
`
export const Feather = styled(FeatherIconProps)`
    color: ${props => props.theme.search}
`

export const FontAwesome5 = styled(FontAwesome5IconProps)`
    color: ${props => props.theme.color}
`

export const Ionicons = styled(IoniconsIconProps)`
    color: ${props => props.theme.color}
`

export const Text = styled(TextProps)`
    color: ${props => props.theme.color}
`

export const MyBox = styled.View`
    background: #c4c4c4;
    width: ${(props) => props.width || width/2};
    height: ${(props) => props.height || height * 0.5}
    
`