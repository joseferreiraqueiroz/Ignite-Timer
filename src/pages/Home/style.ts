import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 3.5rem;
    }
`

const BaseButton = styled.button`
            width: 100%;
            color: ${props => props.theme["gray-100"]};
            padding: 1rem;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-weight: bold;
            transition: 0.3s;
          
            `
export const StopCycleButton = styled(BaseButton)`
         background-color: ${props => props.theme["red-500"]}; 
         &:hover{
           background-color: ${props => props.theme["red-700"]} ;
           transition: 0.3s;
         }
`
export const PlayCycleButton = styled(BaseButton)`
 
         background-color: ${props => props.theme["green-500"]};
        &:disabled{
            opacity: 0.7; 
            cursor: pointer;
        }
        &:not(:disabled):hover{
           background-color: ${props => props.theme["green-700"]} ;
           transition: 0.3s;
         }
`