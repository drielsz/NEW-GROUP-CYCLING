// TENTATIVA PARA MUDAR O TEMA DO APLICATIVO ATRAVÉS DO REDUX.

export const SWTICH_THEME = "SWTICH_THEME"

export const switchTheme = (theme) => {
    return(
        dispatch => {
            dispatch({
                type: SWTICH_THEME,
                theme: theme,
            })
        }
    )
}