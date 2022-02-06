// TENTATIVA PARA MUDAR O TEMA DO APLICATIVO ATRAVÉS DO REDUX.

import {lightTheme} from '../../../styles/themes'
import {SWITCH_THEME} from '../ThemeActions'

const initialState = {
    theme: lightTheme
}

const themeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SWITCH_THEME:
            return{ theme: action.theme}
        
        default: 
            return state;
    }
}

export default themeReducer;    