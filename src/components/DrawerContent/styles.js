import styled, {ThemeProvider} from 'styled-components';
// Cores
import { colors } from '../../styles/colors'

// Dimensões da tela
import { Dimensions } from 'react-native';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
// 
import {Title as TitlePaper, Paragraph as ParagraphPaper, Caption as CaptionPaper} from 'react-native-paper'

export const Container = styled.View`
    background-color: ${(props) => props.bg || colors.secondary};
    flex: 1;
`

export const UserInfoSection = styled.View`
    padding-left: ${(props) => props.paddingLeft || height * 0.020};
`

export const Title = styled(TitlePaper)`
    font-size: ${(props) => props.fontSize || height *  0.022};
    font-weight: ${(props) =>(props.bold ? 'bold' : 'normal')};
    font-family: ${(props => props.fontfamily || 'Nunito_700Bold')};
`

export const Paragraph = styled(ParagraphPaper)`
    margin-right: ${(props) => props.right || height * 0.01};
`

export const Caption = styled(CaptionPaper)`
    font-size: ${(props) => props.fontSize || height *  0.015};
    line-height: ${(props) => props.lineh || height * 0.015}
`