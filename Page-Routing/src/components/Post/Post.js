import classes from './Post.module.css';
// Accessing props from hoc
import {withRouter} from 'react-router-dom';

const post = props => (
    <article className={classes.Post} onClick={props.click}>
        <h1>{props.title}</h1>
        <div className={classes.Info}>
            <div className={classes.Author}>
                {props.author}
            </div>
        </div>
    </article>
);

export default withRouter(post);