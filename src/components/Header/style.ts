import styled from "styled-components";

export const HeaderLayout = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 3px 2px;
    align-items: flex-start;

    img{
        width: 30px;
        height: 30px;
    }
    nav{
        display: flex;
        gap: 0.5rem;
        a{
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${props => props.theme["gray-100"]};

            border-top: 2px solid transparent;
            border-bottom: 2px solid transparent;

            &:hover{
                border-bottom: 2px solid ${props => props.theme["green-500"]};
                transition: 0.3s
            }
            &.active{
                color:${props => props.theme["green-500"]}
            }
        }
    };
`