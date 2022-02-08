import styled from 'styled-components';

import { TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from '../../styles/colors'

var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;


export const Container = styled(ImageBackground)`
    flex:1;
    align-items: ${(props) => props.align || 'center'};
    justify-content: center;
`