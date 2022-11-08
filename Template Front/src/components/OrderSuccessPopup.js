import styled from "styled-components"
import DescriptionAlerts from './AlertSucess'

export const ContainerDiv = styled.div`
    border: 1px solid black;
    border-radius: 1em;
    border-color: lightgrey;
    margin: 1em;
    padding: 1em;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    text-align:center;

    background-color: white;

    > div {
        position: relative;
        width: 100%;
        height: 100%;

        .close-popup {
            position: absolute;
            top: 0;
            left: 100%;
            transform: translateX(-100%);

            padding: 2px 5px;

            width: auto;

            :hover {
                cursor: pointer;
                font-weight: bold;
                background-color: lightgray;
            }
        }
    }
`

function OrderSuccessPopup(props) {
    const { order, closePopup } = props

    return (
        <ContainerDiv>
            <div>
                <h2>Order Resume</h2>
                { order.pizzas.map((pizza) => (
                    <p key={pizza.name}>
                        Pizza {pizza.name} {" "}
                        - {pizza.price.toLocaleString(
                            'pt-br',
                            { style: 'currency', currency: 'USD' }
                        )}
                        {" "} x {pizza.quantity}
                    </p>
                )) }
                <p>
                <strong>
                    Total: {
                    order.total.toLocaleString(
                        'pt-br',
                        { style: 'currency', currency: 'USD' }
                    )}
                </strong>
                </p>

                <span
                    className="close-popup"
                    onClick={closePopup}
                >
                    x
                </span>
            </div>
            <DescriptionAlerts/>
        </ContainerDiv>
    )
}

export default OrderSuccessPopup