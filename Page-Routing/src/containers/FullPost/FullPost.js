import { Component } from 'react';
import axios from 'axios';
import classes from './FullPost.module.css';
import {withRouter} from 'react-router-dom';

class FullPost extends Component {

    state = {
        selected_post_title : null,
        selected_post_content : null
    }

    deleteDataHandler = () => {
        axios.delete("/posts/"+this.props.id)
            .then(response => console.log(response))
    }

    componentDidMount(prevProps){
        console.log(this.props)
        // Condition to prevent infinite loop
        if(prevProps.id!==this.props.id) {
            axios.get("/posts/"+this.props.id)
                .then(response => {
                    console.log(response['data'])
                    this.setState({
                        selected_post_title : response['data']['title'],
                        selected_post_content : response['data']['body']
                    })
                })
                .catch(error => console.log(error))
        }
    }

    render () {
        let post = <p>Please select a Post!</p>;
        if(this.props.id){
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.selected_post_title}</h1>
                    <p>{this.state.selected_post_content}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete} onClick={this.deleteDataHandler}>
                            Delete
                        </button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default withRouter(FullPost);