import styled from "styled-components"

export const ContainerLi = styled.li`
    border: 1px solid black;
    border-radius: 1em;
    border-color: lightgrey;
    margin: 1em;
    padding: 1em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    h3,
    .card-info {
        text-align: center;
    };

    button{
     appearance: none;
     background-color: transparent;
     border: 1px solid #1A1A1A;
     border-radius: 18px;
     box-sizing: border-box;
     color: #3B3B3B;
     cursor: pointer;
     display: inline-block;
     font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
     font-size: 16px;
     font-weight: 300;
     line-height: normal;
     margin: 3px;
     min-height: 60px;
     min-width: 0;
     outline: none;
     text-align: center;
     text-decoration: none;
     transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
     user-select: none;
    -webkit-user-select: none;
     touch-action: manipulation;
     width: 100%;
     will-change: transform;
    }

    button:disabled {
     pointer-events: none;
   }

  button:hover {
   color: #fff;
   background-color: #1A1A1A;
   box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
   transform: translateY(-2px);
}

 button :active {
  box-shadow: none;
  transform: translateY(0);
}

`