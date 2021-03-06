import styled from 'styled-components';

import { TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

import { colors } from '../styles/colors'

var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;

export const Image = styled.Image.attrs(props => ({
    resizeMode: props.mode || 'contain',
}))
`
    width: ${(props) => props.width || '152px'};
    height: ${(props) => props.height || '149px'};
`;

export const Text = styled.Text`
    color: ${(props) => props.color || colors.blind};
    text-transform: ${(props) =>  props.texttransform || 'uppercase'};
    font-size: ${(props) => props.fontSize || '45px'};
    align-self: ${(props) => props.alignSelf || 'center'};
    margin-bottom: ${(props) => props.marginBottom || '0'};
    margin-right: ${(props) => props.marginRight || '0'};
`


export const Button = styled(TouchableOpacity)`
    margin-top: ${(props) => props.margintop || height*0.070}px;
    width: ${(props) =>  props.width || height * 0.270}px;
    height: ${(props) =>  props.height || height * 0.07}px;
    background-color: ${(props) => props.background || colors.primary};
    border-radius: ${(props) => props.radius || height * 0.02}px;
`

export const Container = styled(ImageBackground)`
    flex:1;
    align-items: ${(props) => props.align || 'center'};
    justify-content: ${(props) => (props.justify || 'center')};
`

export const ImageProfile = styled.Image`
    width: ${(props) => props.size || height * 0.15}px;
    height: ${height * 0.16}px;
    aspect-ratio: 1;
    border-radius: ${(props) => props.radius || '55px'};
    margin-top: ${(props) => props.margin || height * -0.08}px;
    align-self: ${(props) => props.align || 'center'};
`