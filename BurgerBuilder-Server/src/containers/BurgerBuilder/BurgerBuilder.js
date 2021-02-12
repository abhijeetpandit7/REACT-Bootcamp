// Core-stateful component => Display Burger-contents + Build-controls
import {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders';
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    meat : 1.2,
    bacon : 0.7,
    salad : 0.5,
    cheese : 0.4
}

class BurgerBuilder extends Component {

    state = {
        ingredients : null,
        totalPrice : 4,
        purchasable : false,
        purchasing : false,
        loading: false,
        error: false
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
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            paymentMethod: 'Online',
            customer: {
                name: 'Abhijeet Pandit',
                phone: +917589632214,
                address: {
                    city: 'Mumbai',
                    zipCode: 400502
                }
            }
        }
        axios.post('/orders.json', order)
            .then(response => this.setState({loading: false, purchasing: false}))
            .catch(error => this.setState({loading: false, purchasing: false}))
    }

    componentDidMount() {
        axios.get("/ingredients.json")
            .then(response => this.setState({ingredients: response['data']}))
            .catch(error => this.setState({error: true}))
    }

    render() {

        let orderSummary = null;
        // If error encountered show messsage, else display spinner
        let burger = this.state.error? <p>Oops! Ingredients can't be loaded.</p> : <Spinner animation="border" />

        // If componenet is mounted and ingredient data fetched
        if(this.state.ingredients){
            burger = (
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
                </>
            );
    
            orderSummary = (
                <OrderSummary 
                    ingredients={this.state.ingredients} 
                    price = {this.state.totalPrice} 
                    purchaseContinued = {this.purchaseContinuedHandler}
                    purchaseCancelled = {this.purchaseHandler}
                />
            )  
        }

        // If order data is posting
        if(this.state.loading) {
            orderSummary = <Spinner animation="border" />
        }

        return (
            <>
                <Modal show={this.state.purchasing} click={this.purchaseHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);