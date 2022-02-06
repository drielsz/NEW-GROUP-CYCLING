import styled from 'styled-components';
// Importando dimensões
import { Dimensions, ScrollView } from 'react-native'
// constatando dimensões
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    top: ${(props) => props.top || height * 0.03}
`

export const MyBox = styled.View`
    background: #c4c4c4;
    width: ${(props) => props.width || width/2};
    height: ${(props) => props.height || height * 0.5}
    
`