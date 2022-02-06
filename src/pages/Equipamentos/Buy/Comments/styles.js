import styled, {css} from 'styled-components';
import { Dimensions, TouchableOpacity } from 'react-native';
// Importando dimensões
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
// Cores
import { colors } from '../../../../styles/colors';

export const Container = styled.View`
    flex:1;
    background: ${(props) => props.bg || colors.backgroundComments}
    
`
export const ViewEmoji = styled.View`
    position: absolute;
    bottom: ${(props) => props.bottom || height * height * 0.03}
    align-self: flex-end
`
export const ViewAvatar = styled.View`
    justify-content: center;
    marginLeft: ${(props) => props.left || height * 0.034}
`
export const ViewComments = styled(TouchableOpacity)`
    position: absolute;
    bottom: ${(props) => props.bottom || height * 0.14};
    align-self: center;
    flex-direction: row;
    background: ${(props) => props.bg || colors.blind};
    width: ${(props) => props.width || width * 0.919}
    height: ${(props) => props.height || height * 0.12}
    border-radius: ${(props) => props.radius || height * 0.03}
`

export const ViewBack = styled.View`
    width: ${(props) => props.width || height * 0.040};
    height: ${(props) => props.height || height * 0.040};
    border-radius: ${(props) => props.radius || height * 0.040};
    background: ${(props) => props.bg || colors.blind};
    margin-left: ${(props) => props.left || height * 0.022}
    margin-top: ${(props) => props.top || height * 0.062}
    align-items: center;
    justify-content: center;
    flex-direction: row;
`


export const TextComment = styled.Text`
    justifyContent: center; 
    alignSelf: center;
    marginLeft: ${(props) => props.left || height * 0.012}
    top: ${(props) => props.top || height * 0.012};
    color: ${(props) => props.color || colors.replyfromComments}
`
export const TextNameProfileComment = styled.Text`
    color: ${(props) => props.color || colors.namefromComments}
    justifyContent: center; 
    alignSelf: center;
    bottom: ${(props) => props.bottom || height * 0.06};
    margin-left: ${(props) => props.left || height * 0.115}
    position: absolute;
`