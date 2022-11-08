import {ContainerLi} from './PizzaCard.styled'
import pizzacard from '../assents/pizzacard.png'


function PizzaCard(props) {
    const { pizza, addToCart } = props

    return (
        <ContainerLi>
            <img src ={pizzacard}/>
            <h3>{pizza.name}</h3>
            <p className="card-info">
                {pizza.ingredients.map((item) => {
                    return (
                        <span key={item}>{`${item} `}</span>
                    )
                })}
            </p>
            <h3 className="card-info">
                {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
            </h3>
           
            <button onClick={() => addToCart(pizza)}>Add to Cart</button>
        </ContainerLi>
    )
}

export default PizzaCard