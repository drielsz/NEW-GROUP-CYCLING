import styled from 'styled-components/native'
// Dimensões da tela do usuario, reponsavel por responsavidade
import { Dimensions, ImageBackground as ImageReactNative, Image as ImageReact, StyleSheet } from 'react-native';

import { colors } from '../../styles/colors'
// Complementação do dimensios, estou pegando a largura e altura do celular do usuario e multiplicando por frações para fazer a responsividade.
var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;
// Safe area View, responsavel por os componentes dentro do aplicativo em lugares seguros, ou seja, não deixar um texto no topo
// em cima de alguma coisa.
import { SafeAreaView as SafeAreaContext } from 'react-native-safe-area-context';

// Vou utilizar bastante props, para caso se quiser mudar a cor, ou algo do tipo, é fácil de acessar e mudar, O Safe Area View vai ser o container do projeto
export const SafeAreaView = styled(SafeAreaContext)`
    flex:10;
    align-items: center;
    background: ${(props) => props.bg || props.theme.background} 
`

export const ImageBackground = styled(ImageReactNative) `
    width: ${(props) => props.width || width};
    height: ${(props) => props.height || height * 0.42}
`

export const Image = styled(ImageReact)`
    width: ${(props) => props.size || height * 0.070};
    height: ${(props) => props.size || height * 0.070};
    border-radius: ${(props) => props.radius || height * 0.050};
    left: ${(props) => props.left || height * 0.030};
    top: ${(props) => props.top || height * -0.034}
`

export const ViewIcons = styled.View`
    background: ${(props) => props.bg || '#FDFDFD'};
    width: ${(props) => props.size || height * 0.25};
    height: ${(props) => props.size || height * 0.06};
    top: ${(props) => props.top || height * 0.32};
    left: ${(props) => props.left || height * 0.18};
    border-radius: ${(props) => props.radius || height * 0.03};
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    margin-horizontal: ${(props) => props.horizontal || 0}
`
export const ViewReport = styled.View`
    background: ${(props) => props.bg || colors.backgroundComments};
    width: ${(props) => props.size || height * 0.06};
    height: ${(props) => props.size || height * 0.1};
    border-radius: ${(props) => props.radius || height * 0.03};
    left: ${(props) => props.left || height * 0.44};
    top: ${(props) => props.top || height * 0.09};
    align-items: center;
    justify-content: center;
`

export const styles = StyleSheet.create({
    viewIcon:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    }
})