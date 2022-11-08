import styled from "styled-components"


export const ContainerSection = styled.section`
    width: 30em;
    border: 1px solid black;
    border-radius: 1em;
    border-color: lightgrey;
    margin: 1em;
    padding: 1em;
    position: fixed;
    top:12em;
    right:5em;
    background-color: lightblue;

    
    h1 {
        font-size: 1.5em;
        text-align: center;
    }

    button.ConfirmOrder{
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
     margin-left: 110px;
     min-height: 40px;
     min-width: 0;
     outline: none;
     text-align: center;
     text-decoration: none;
     transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
     user-select: none;
    -webkit-user-select: none;
     touch-action: manipulation;
     width: 50%;
     will-change: transform;
    }

    button.ConfirmOrder:disabled {
     pointer-events: none;
   }

  button.ConfirmOrder:hover {
   color: #fff;
   background-color: #1A1A1A;
   box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
   transform: translateY(-2px);
}

 button.ConfirmOrder:active {
  box-shadow: none;
  transform: translateY(0);
}

@media (max-width:800px){
    width: 20em;

}

`

export const BagButton = styled.button`
        display:flex;
        position:fixed;
        top:10em;
        right:5em;
        width:80px;
        background:none;
        border:none;
        cursor:pointer;
        img {
            width:35px;
        }

        


`