// Showing order summary (ingredients + price)
import Button from '../../UI/Button/Button';

const orderSummary = props => {

    const burgerIngredients = Object.entries(props.ingredients)
        .map( ([ingredient,count]) => (
            <li key={ingredient}>
                <span style={{textTransform:'capitalize'}}>
                    {ingredient}
                </span> : {count}
            </li>
        ));
    
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {burgerIngredients}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout ?</p>
            <Button clicked={props.purchaseCancelled} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType='Success'>CONTINUE</Button>
        </>
    );

}

export default orderSummary;