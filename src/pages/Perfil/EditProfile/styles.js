import styled from 'styled-components';
import { Dimensions, Text as TextProps } from 'react-native';
import { SafeAreaView as SafeAreaContext} from "react-native-safe-area-context";
import { AntDesign as AntDesignIcon } from '@expo/vector-icons';
import {
    Title as TitlePaper,
    Caption as CaptionPaper,
    Avatar as AvatarPaper,
    Text as TextPaper,
    TouchableRipple as TouchableRipplePaper,
  } from "react-native-paper";

import FontAwesome from "react-native-vector-icons/FontAwesome";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


export const SafeAreaView = styled(SafeAreaContext)`
  flex:1;
  background-color: ${props => props.theme.background};
`;

export const Text = styled(TextPaper)`
  margin-top: ${height * 0.010}px;
  font-size: ${height * 0.018}px;
  font-weight: bold;
  color: ${props => props.theme.color};
`

export const Caption = styled(CaptionPaper)`
  color: ${props =>  props.theme.color};
`

export const FontAwesomeIcon = styled(FontAwesome)`
  color: ${props => props.theme.color};
  margin-top: ${height * 0.003}px;
`

export const Header = styled.View`
  align-items: center;
  justify-content: flex-start;
  width: ${width};
  height: ${ height * 0.105}px;
  background-color: ${props => props.theme.background};
  flex-direction: row;
`

export const TextReact = styled(TextProps)`
  color: ${props => props.theme.color};
  margin-top: ${height * 0.055}px;
  font-weight: bold;
  text-align: center;
  font-size: ${height * 0.02}px;
`

export const AntDesign = styled(AntDesignIcon)`
  margin-top: ${height * 0.035}px;
  margin-left: ${height * 0.02}px;
  color: ${props => props.theme.color};
`

export const ViewFromBottomSheetContent = styled.View`
  background-color: ${props => props.theme.color};
  padding: 20px;
  padding-top: 20px;
`