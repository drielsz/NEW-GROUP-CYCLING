import styled from 'styled-components/native'
// Dimensões da tela do usuario, reponsavel por responsavidade
import { Dimensions } from 'react-native';

import { colors } from '../../styles/colors'
// Complementação do dimensios, estou pegando a largura e altura do celular do usuario e multiplicando por frações para fazer a responsividade.
var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;
// Safe area View, responsavel por os componentes dentro do aplicativo em lugares seguros, ou seja, não deixar um texto no topo
// em cima de alguma coisa.
import { SafeAreaView as SafeAreaContext } from 'react-native-safe-area-context';

// Vou utilizar bastante props, para caso se quiser mudar a cor, ou algo do tipo, é fácil de acessar e mudar, O Safe Area View vai ser o container do projeto
export const SafeAreaView = styled(SafeAreaContext)`
    flex:1;
    background-color: ${(props) => props.bg || props.theme.background}

`