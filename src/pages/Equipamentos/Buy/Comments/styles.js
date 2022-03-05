import styled, {css} from 'styled-components';
import { Dimensions, TouchableOpacity, Text as TextReact } from 'react-native';
import { Ionicons as IoniconsVectorIcons, AntDesign as AntDesignVectorDesign, Entypo as EntypoVectorDesign } from "@expo/vector-icons";
// Importando dimensões
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
// Cores
import { colors } from '../../../../styles/colors';

export const Container = styled.View`
    flex:1;
    background-color: ${(props) => props.bg || props.theme.backgroundCommentProduct}
    
`

export const Text = styled(TextReact)`
    color: ${(props) => props.color || props.theme.color}
`
export const Ionicons = styled(IoniconsVectorIcons) `
    color: ${(props) => props.color || props.theme.color}
`
export const AntDesign = styled(AntDesignVectorDesign) `
    color: ${(props) => props.color || props.theme.color}
`
export const Entypo = styled(EntypoVectorDesign) `
    color: ${(props) => props.color || props.theme.color}
`
export const ViewEmoji = styled.View`
    position: absolute;
    bottom: ${(props) => props.bottom || height * height * 0.03};
    align-self: flex-end
`
export const ViewAvatar = styled.View`
    justify-content: center;
    margin-left: ${(props) => props.left || height * 0.034}
`
export const ViewComments = styled(TouchableOpacity)`
    position: absolute;
    bottom: ${(props) => props.bottom || height * 0.14};
    align-self: center;
    flex-direction: row;
    background: ${(props) => props.bg || colors.blind};
    width: ${(props) => props.width || width * 0.919};
    height: ${(props) => props.height || height * 0.12};
    border-radius: ${(props) => props.radius || height * 0.03}
`

export const ViewBack = styled.View`
    width: ${(props) => props.width || height * 0.040};
    height: ${(props) => props.height || height * 0.040};
    border-radius: ${(props) => props.radius || height * 0.040};
    background: ${(props) => props.bg || colors.blind};
    margin-left: ${(props) => props.left || height * 0.022};
    margin-top: ${(props) => props.top || height * 0.062};
    align-items: center;
    justify-content: center;
    flex-direction: row;
`


export const TextComment = styled.Text`
    justify-content: center; 
    align-self: center;
    margin-left: ${(props) => props.left || height * 0.012};
    top: ${(props) => props.top || height * 0.012};
    color: ${(props) => props.color || colors.replyfromComments};
    font-family: ${(props) => props.fontFamily || 'Nunito_400Regular'};
`
export const TextNameProfileComment = styled.Text`
    color: ${(props) => props.color || colors.namefromComments};
    justify-content: center; 
    align-self: center;
    bottom: ${(props) => props.bottom || height * 0.06};
    margin-left: ${(props) => props.left || height * 0.115};
    position: absolute;
    font-family: ${(props) => props.fontFamily || 'Nunito_700Bold'}
`