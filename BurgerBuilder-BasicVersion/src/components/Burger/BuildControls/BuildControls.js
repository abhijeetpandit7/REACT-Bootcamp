// Controls for Burger-Ingredients required in BurgerBuilder
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = props => {
    
    const controls = [
        {label : 'Meat', type : 'meat'},
        {label : 'Bacon', type : 'bacon'},
        {label : 'Salad', type : 'salad'},
        {label : 'Cheese', type : 'cheese'}
    ];

    return (
        <div className = {classes.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(element => 
                <BuildControl 
                    key = {element.label} 
                    label = {element.label}
                    added = {() => props.ingredientAdded(element.type)}
                    deleted = {() => props.ingredientDeleted(element.type)}
                    isDisabled = {props.ingredients[element.type] === 0}
                />
            )}
            <button 
                disabled = {!props.purchasable}
                className = {classes.OrderButton}
                onClick = {props.ordered}>ORDER NOW
            </button>
        </div>
    );
}

export default buildControls;