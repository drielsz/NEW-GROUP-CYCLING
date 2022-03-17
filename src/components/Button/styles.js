import styled from 'styled-components';
import { TouchableOpacity, Text as TextReact, Dimensions } from 'react-native';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export const Button = styled(TouchableOpacity)`
    bottom: ${(props) => props.bottom || height  * 0.020};
    justify-content: center;
    align-items: center;
    align-self: center;
    width: ${(props) => props.width || width * 0.89};
    height: ${(props) => props.height || height * 0.065};
    background: ${(props) => props.bg || props.theme.backgroundIcon};
    border-radius: ${(props) => props.radius || height * 0.008};
    margin-top: ${(props) => props.top || '0px'}
`

export const Text = styled(TextReact)`
    color: ${(props) => props.color || props.theme.color};
`