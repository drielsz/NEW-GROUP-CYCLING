import styled, {ThemeProvider} from 'styled-components';
// Cores
import { colors } from '../../styles/colors'

// Dimensões da tela
import { Dimensions, Text as TextProps, Image as ImageProps} from 'react-native';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
// 
import {Title as TitlePaper, Paragraph as ParagraphPaper, Caption as CaptionPaper, Switch as SwitchPaper} from 'react-native-paper'
// 
import {  Entypo as EntypoProps, Octicons as OcticonsProps, MaterialCommunityIcons as MaterialCommunityIconsProps  } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export const Container = styled.View`
    background-color: ${props => props.theme.background};
    flex: 1;
`

export const UserInfoSection = styled.View`
    padding-left: ${(props) => props.paddingLeft || height * 0.020};
`

export const Title = styled(TitlePaper)`
    color: ${props => props.theme.color}; 
    font-size: ${(props) => props.fontSize || height *  0.022};
    font-weight: ${(props) =>(props.bold ? 'bold' : 'normal')};
    font-family: ${(props => props.fontfamily || 'Nunito_700Bold')};
`

export const Paragraph = styled(ParagraphPaper)`
    color: ${props => props.theme.color}; 
    margin-right: ${(props) => props.right || height * 0.01};
`

export const Caption = styled(CaptionPaper)`
    color: ${props => props.theme.color}; 
    font-size: ${(props) => props.fontSize || height *  0.015};
    line-height: ${(props) => props.lineh || height * 0.015}
`

export const Entypo = styled(EntypoProps)`
    color: ${props => props.theme.color}

`
export const Octicons = styled(OcticonsProps)`
    color: ${props => props.theme.color}

`

export const Icons = styled(Icon)`
    color: ${props => props.theme.color};
    ;
`

export const MaterialCommunityIcons = styled(MaterialCommunityIconsProps)`
    color:${props => props.theme.color}
`

export const Text = styled(TextProps)`
    color: ${props => props.theme.color};
    margin-left: ${height * 0.03};
`

export const Image = styled.ImageBackground.attrs( props =>({
 tintColor: props.theme.color
}))`
`;

export const Line = styled.View`
    color: ${props => props.theme.color}
`

