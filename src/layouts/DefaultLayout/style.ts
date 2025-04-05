import styled from "styled-components";

export const LayoutComponent = styled.div`
    background-color: ${props => props.theme["gray-800"]};
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`