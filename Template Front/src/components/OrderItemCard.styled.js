import styled from "styled-components"

export const ContainerLi = styled.li`
    display: flex;
    justify-content: center;
    button{
        display: flex;
        justify-content: center;
        width:20px;
        margin-right:85px;
        background: none;
        border: none;
        
    };

    img{
        width:25px;
    };
    @media (max-width:800px){
        img{
        width:35px;
        height: 25px;
        margin-left:8px;
    };   
    }
    
`