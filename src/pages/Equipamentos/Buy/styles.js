import React from 'react';
import { ImageBackground as ImageReact, Dimensions, TouchableOpacity, Text as TextReact } from 'react-native';
// Icon
import { AntDesign as AntDesignIcon } from '@expo/vector-icons'; 
import {ScrollView as ScrollViewGestureProps} from 'react-native-gesture-handler';
// Estilos
import styled from 'styled-components';
// Cores
import { colors } from '../../../styles/colors';
// Pegando as dimensões
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export const ScrollView = styled(ScrollViewGestureProps)`
    /*#101010*/
    background-color: ${(props) => props.bg || props.theme.background}; 
`
export const Text = styled(TextReact)`
    color: ${(props) => props.color || props.theme.color};
`
export const Image = styled(ImageReact)`
    width: ${(props) => props.width || width};
    height: ${(props) => props.height || height * 0.35};

`

export const ViewImage = styled.View`
    align-self: center;
    justify-content: center;
`
export const Dot = styled.View`
    justify-content: space-around;
    flex-direction: row;
    align-self: center;
    width: ${(props) => props.width || width * 0.025};
    height: ${(props) => props.height || height * 0.012};
    border-radius: ${(props) => props.radius || height * 0.1};
    background: ${(props) => props.bg || colors.secondary};
    bottom: ${(props) => props.bottom || height  * 0.10};
    margin: 1.9px;
`
export const DotView = styled.View`
    align-self: center;
    flex-direction: row;
`
export const Arrow = styled.View`
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    width: ${(props) => props.width || width * 0.12};
    height: ${(props) => props.height || height * 0.06};
    border-radius: ${(props) => props.radius || height * 0.1};
    bottom: ${(props) => props.bottom || height  * 0.29};
    right: ${(props) => props.right || height * 0.018};
`
export const MarginLeftRight = styled.View`
    margin-left: ${(props) => props.left || height * 0.030};
    margin-right: ${(props) => props.right || height * 0.030};
`

export const Spacer = styled.View`
    margin-top: ${(props) => props.top || height * 0.023};
`

export const Button = styled(TouchableOpacity)`
    bottom: ${(props) => props.bottom || height  * 0.020};
    justify-content: center;
    align-items: center;
    align-self: center;
    width: ${(props) => props.width || width * 0.89};
    height: ${(props) => props.height || height * 0.065};
    background: ${(props) => props.bg || props.theme.backgroundIcon};
    border-radius: ${(props) => props.radius || height * 0.008};
`
// width: 320
export const ViewHeart = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: ${(props) => props.bg || props.theme.backgroundIcon};
    width: ${(props) => props.width || width * 0.3};
    height: ${(props) => props.height || height * 0.046};
    border-radius: ${(props) => props.radius || height * 0.03};
    top: ${(props) => props.top || height * 0.42};
    align-self: flex-end;
`

export const AntDesign = styled(AntDesignIcon)`
    
`

export const ViewBackArrow = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    margin-top: 45px;
    margin-left:  ${height * 0.030};
    width: 45px;
    height: 45px;
    border-radius: 33px;
    background-color: ${(props) => props.bg || props.theme.background}
`