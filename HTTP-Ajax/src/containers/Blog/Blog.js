import { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';
// import axios from 'axios';
import axios from '../../axios';

class Blog extends Component {

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
            const reduced_posts = response['data'].slice(0,4)
            const updated_posts = reduced_posts.map(post => ({
                ...post,
                author: 'Abhijeet'
            }))
            this.setState({posts : updated_posts})
        })
    }
    

    render () {

        const posts = this.state.posts.map(post => 
            <Post 
                key={post['id']} 
                title={post['title']} 
                author={post['author']} 
                click={() => this.selectedPostHandler(post['id'])} 
            />
        )


        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selected_post_id} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;