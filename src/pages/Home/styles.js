import styled from 'styled-components/native'
// Dimensões da tela do usuario, reponsavel por responsavidade
import { Dimensions, ImageBackground as ImageReactBackground, Text as TextReact, Image as ImageFromReact, PixelRatio} from 'react-native';
import { colors } from '../../styles/colors'
// Complementação do Dimensions, estou pegando a largura e altura do celular do usuario e multiplicando por frações para fazer a responsividade.
var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;
// Safe area View, responsavel por os componentes dentro do aplicativo em lugares seguros, ou seja, não deixar um texto no topo
// em cima de alguma coisa.
import { SafeAreaView as SafeAreaContext } from 'react-native-safe-area-context';

// Vou utilizar bastante props, para caso se quiser mudar a cor, ou algo do tipo, é fácil de acessar e mudar, O Safe Area View vai ser o container do projeto
export const SafeAreaView = styled(SafeAreaContext)`
    flex:1;
    background-color: ${(props) => props.bg || props.theme.background};
`

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Image = styled(ImageReactBackground)`

`

export const Name = styled(TextReact)`
    font-size: 12px;
    font-family: 'Nunito_400Regular';
    color: ${props => props.theme.nameUserPost};
    letter-spacing: 0.8;
`

export const Time = styled(Name)`
    letter-spacing: 0;
    color: ${colors.graySecondary};
    font-size: 12px;
`

export const Description = styled(Time)`
    font-size: 12px;
    background-color: ${props => props.theme.background};
`

export const ViewReactions = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px;
    background-color: ${(props) => props.bg || props.theme.background};
    width: ${height * 0.24}px;
    height: ${height * 0.045}px;
    border-radius: 20px;
    position: absolute;
    right: ${height * 0.04}px;
    top: ${height * 0.47}px;
`
