import React,{useState, useEffect} from 'react'
import {ContainerSection, BagButton} from "./OrderSummary.styled"
import OrderItemCard from "../components/OrderItemCard"
import bag from '../assents/bag.png'
import alert from '../assents/alert.png'


function OrderSummary(props) {
    const { cart, removeFromCart, total, confirmOrder } = props
    const [OrderResume, setOrderResume] = useState(true)
    const [iconChange, setIconChange] = useState(false)

    const ShowOrder = () => {
        setOrderResume(!OrderResume)
    }

    useEffect(() =>{
        if(cart.length > 0) {
        setIconChange(true)

    } else {
        setIconChange(false)
    }

    },[cart])

    

    return (
        <div>
        <BagButton onClick={ShowOrder}>{iconChange?<img src ={alert}/>:''}<img src ={bag}/></BagButton>
        {!OrderResume? 
        <ContainerSection>
            <h1>Order</h1>

            {cart.map((pizza) => {
                return (
                    <OrderItemCard
                        key={pizza.name}
                        pizza={pizza}
                        removeFromCart={removeFromCart}
                    />
                )
            })}

            <h2>
                Total: {
                    total.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
            </h2>
            <button className='ConfirmOrder' onClick={confirmOrder}>Confirm Order</button>
        </ContainerSection>
            : ""}
        </div>
                    
    )
}



export default OrderSummary