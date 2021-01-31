// Create actual Burger
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = props => {

    let transformedIngredients = Object.entries(props.ingredients).map(([key,value]) => 
            [...Array(value)].map((element,index) => 
                <BurgerIngredients key={key+index} type={key} />
            )
        ).flat()
        
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients !</p>
    }
            
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top' />
            {transformedIngredients}
            <BurgerIngredients type='bread-bottom' />
        </div>
    );

}

export default burger;