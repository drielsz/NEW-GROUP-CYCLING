import styled from 'styled-components/native'

import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';

import { Dimensions } from 'react-native';

import { colors } from '../../styles/colors'


var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;



export const TextOR = styled.Text `
font-size: ${(props) => props.fontSize || height *  0.022}
color: ${(props) => props.color || colors.blind};
align-self: ${(props) => props.alignSelf || 'center'}
margin-top: ${(props) => props.margintop || height * 0.05}
`