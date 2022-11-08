import React from 'react'
import styled from 'styled-components'
import pizzalogo from '../assents/pizzalogo.png'
import telicon from '../assents/telicon.png'

export const Menubar = styled.ul `
		display: flex;
		text-align: center;
		background-color: lightgray;
		padding-top: 35px;

		a{
			margin:15px;
			padding:10px;
			text-decoration: none;
			color:black;
			@media (max-width: 800px){
				display: flex;
				flex-direction: column;
				width: 50%;
				padding: 0px;
			};
		}

		.pizzaLogo{
			width: 50px;
		}

		.telIcon{
			width: 35px;
	
		p{
			display: inline;
			padding-left: 15px;
			font-weight: bold;
			
			@media (max-width:800px){
				display:flex;
				text-align: center;
				font-weight: bold;
			};
	
		}
	}


`
export const menuContainer = styled.div`
            margin:0 auto;
			padding:0 auto;

`


const AppBar = () => {
  return (
    <menuContainer>
        <Menubar>
            <li>
			<a href="#">Payment	</a>
			<a href="#">About us</a>
			<a href="#">Contatcs</a>
			</li>
			<li>
			<img className='pizzaLogo' src = {pizzalogo}/>
			<h3>Pizza Classic</h3>
			</li>
			<li>
				<img className='telIcon' src = {telicon}/>
				<p>0 800 33 08 98</p>
			</li>

    
        </Menubar>
    </menuContainer>
  )
}

export default AppBar
