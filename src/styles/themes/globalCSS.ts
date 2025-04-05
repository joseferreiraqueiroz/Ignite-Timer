import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
 
    body{
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
    }
    body, input, textarea, button{
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
`