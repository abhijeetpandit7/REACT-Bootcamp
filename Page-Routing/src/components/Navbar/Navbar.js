import classes from './Navbar.module.css'
import {NavLink, withRouter} from 'react-router-dom';

const navbar = props => (
    <header>
        <ul>
            <li>
                {/* Absolute path */}
                <NavLink activeClassName={classes.active} exact to='/'>Home</NavLink>
            </li> 
            <li>
                {/* Relative path */}
                <NavLink activeClassName={classes.active} to={{
                    pathname: props.match.url+'new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                }}>New Post</NavLink>
            </li>
        </ul>
    </header>
);

export default withRouter(navbar);