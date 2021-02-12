// Layout to wrap content core-components
import {Component} from 'react';
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    
    state = {
        showSideDrawer : false
    }
    
    sideDrawerToggleHandler = () => this.setState(prevState => 
        ({showSideDrawer : !prevState.showSideDrawer})
    )

    render() {
        return (
            <>
                <Toolbar open={this.sideDrawerToggleHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerToggleHandler} 
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;