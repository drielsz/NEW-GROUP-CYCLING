import styled from 'styled-components/native'
import { SafeAreaView as SafeAreaContext } from 'react-native-safe-area-context';

export const SafeAreaView = styled(SafeAreaContext)`
    align-items: center;
    background: ${(props) => props.bg || props.theme.background} 
`