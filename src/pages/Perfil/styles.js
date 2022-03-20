import styled from 'styled-components';

import { colors } from '../../styles/colors'

import { Dimensions } from 'react-native';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export const PrimaryView = styled.ImageBackground`
    width: auto;
    height: 280;
    min-height: auto;
`;

export const AnotherView = styled.View`
    width: ${(props) => props.width || width};
    height: ${(props) => props.height || height};
    margin-top: ${(props) => props.margin || height * 0.18}px;
    background-color: ${(props) => props.bg || props.theme.background};
`;

export const Text = styled.Text`
    color: ${(props) => props.color || props.theme.color};
    align-self: ${(props) => props.align || 'center'};
    font-size: ${(props) => props.size || height * 0.04}px;
    margin-top: ${(props) => props.margin || height * 0.03}px;
`;

export const Button = styled.TouchableOpacity`
    width: 120px;
    height: 61px;
    background-color: ${(props) => props.bg || colors.primary};
`;

export const CircleToIcon = styled.View`
    justify-content: center;
    align-items: center;
    margin: ${height * 0.04}px;
    width: 37px;
    height: 37px;
    border-radius: 33;
    background-color: ${(props) => props.bg || props.theme.background};
    position: absolute;
`