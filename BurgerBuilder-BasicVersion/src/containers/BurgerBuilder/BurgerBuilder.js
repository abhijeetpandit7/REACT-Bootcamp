// Core-stateful component => Display Burger-contents + Build-controls
import {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
    meat : 1.2,
    bacon : 0.7,
    salad : 0.5,
    cheese : 0.4
}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            meat : 0,
            bacon : 0,
            salad : 0,
            cheese : 0
        },
        totalPrice : 4,
        purchasable : false,
        purchasing : false
    }

    updatePurchaseState = ingredients => {
        const sum = Object.values(ingredients)
            .reduce((total,value) => total + value, 0);
        this.setState({purchasable : sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = oldCount + 1
        this.setState(prevState => {
            return {
                ingredients : updatedIngredients,
                totalPrice : prevState.totalPrice + INGREDIENT_PRICES[type]
            }
        });
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = oldCount - 1
        this.setState(prevState => {
            return {
                ingredients : updatedIngredients,
                totalPrice : prevState.totalPrice - INGREDIENT_PRICES[type]
            }
        });
        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler = () => {
        this.setState(prevState => ({purchasing : !prevState.purchasing}))
    }

    purchaseContinuedHandler = () => {
        alert("You look great to continue");
    }

    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredients = {this.state.ingredients} 
                    ingredientAdded = {this.addIngredientHandler} 
                    ingredientDeleted = {this.removeIngredientHandler}    
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler}
                />
                <Modal show={this.state.purchasing} click={this.purchaseHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        price = {this.state.totalPrice} 
                        purchaseContinued = {this.purchaseContinuedHandler}
                        purchaseCancelled = {this.purchaseHandler}
                    />
                </Modal>
            </>
        );
    }
}

export default BurgerBuilder;