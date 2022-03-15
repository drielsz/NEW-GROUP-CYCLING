import styled from 'styled-components';
import {Text as TextProps, TextInput as TextInputProps} from 'react-native'
import { colors } from '../../styles/colors';
// Icons
import { Feather as FeatherIconProps, FontAwesome5 as FontAwesome5IconProps, Ionicons as IoniconsIconProps  } from "@expo/vector-icons";
// Import dimensions
import { Dimensions,  } from 'react-native'
import {ScrollView as ScrollViewGesture} from 'react-native-gesture-handler';
// Noting dimensões
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
    color: ${props => props.theme.search};
`

export const FontAwesome5 = styled(FontAwesome5IconProps)`
    color: ${props => props.theme.color};
`

export const Ionicons = styled(IoniconsIconProps)`
    color: ${props => props.theme.color};
`

export const Text = styled(TextProps)`
    color: ${props => props.theme.color};
`

export const MyBox = styled.View`
    background: #c4c4c4;
    width: ${(props) => props.width || width/2};
    height: ${(props) => props.height || height * 0.5};
`

export const TextInput = styled(TextInputProps)`
    padding: ${height * 0.010}px;
    top: ${height * 0.015}px;
    flex-direction: row;
    background-color: ${colors.backgroundComments};
    border-radius: ${height * 0.015}px;
`
