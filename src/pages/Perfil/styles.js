import styled from 'styled-components';

import { colors } from '../../styles/colors'

import { Dimensions } from 'react-native';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export const PrimaryView = styled.ImageBackground.attrs(props => ({
    resizeMethod: props.method || 'scale',
    resizeMode: props.mode || 'stretch',
}))`
    /* background-color: ${(props) => props.background || colors.primary} */
`;


export const AnotherView = styled.View`
    width: ${(props) => props.width || width};
    height: ${(props) => props.height || height};
    margin-top: ${(props) => props.margin || height * 0.18};
    background-color: ${(props) => props.bg || colors.secondary}

`

export const Text = styled.Text`
    color: ${(props) => props.color || colors.tertiary};
    align-self: ${(props) => props.align || 'center'};
    font-size: ${(props) => props.size || height * 0.04};
    margin-top: ${(props) => props.margin || height * 0.03}
`


export const Button = styled.TouchableOpacity`
    width: '120px';
    height: '61px';
    background-color: ${(props) => props.bg || colors.primary};
`