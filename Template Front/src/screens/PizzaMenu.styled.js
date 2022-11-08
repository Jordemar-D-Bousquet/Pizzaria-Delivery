import styled from "styled-components"

export const ContainerSection = styled.section`
    ul {
        display: flex;
        position:absolute;
        top:175%;

        @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items:center;
        padding-left: 100px;
        width: 80%;
    }
    }
    
`