import {Component} from 'react';
import classes from './Posts.module.css';
import Post from '../../components/Post/Post';
import axios from '../../axios';
import {Link} from 'react-router-dom';

class Posts extends Component {
    
    state = {
        posts: [],
        selected_post_id : ''
    }

    selectedPostHandler(id) {
        this.setState({selected_post_id: id})
    }

    componentDidMount() {
        axios.get("/posts")
            .then((response) => {
                const reduced_posts = response['data'].slice(0,5)
                const updated_posts = reduced_posts.map(post => ({
                    ...post,
                    author: 'Abhijeet'
                }))
                this.setState({posts : updated_posts})
            })
    }

    render(){
        const posts = this.state.posts.map(post => 
            <Link to={'/posts/'+post['id']} key={post['id']}>
                <Post 
                    title={post['title']} 
                    author={post['author']} 
                    click={() => this.selectedPostHandler(post['id'])} 
                />
            </Link>
        )

        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        )
    }
}

export default Posts;