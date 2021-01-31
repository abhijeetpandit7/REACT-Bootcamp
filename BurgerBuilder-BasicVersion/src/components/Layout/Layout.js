// Layout to wrap content core-components
import classes from './Layout.module.css'

const layout = props => (
    <>
        <div>Toolbar, side-drawer, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </>
);

export default layout;