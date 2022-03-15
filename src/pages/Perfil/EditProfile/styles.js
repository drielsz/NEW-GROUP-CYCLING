import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { SafeAreaView as SafeAreaContext} from "react-native-safe-area-context";
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