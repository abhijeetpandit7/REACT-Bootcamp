import { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import Posts from '../Posts/Posts';
import {Route} from 'react-router-dom'

class Blog extends Component {

    render () {
        return (
            <div>
                <Navbar />
                <Route exact path='/' component={Posts} />
                <Route path='/posts/:' component={FullPost} />
                <Route path='/new-post' component={NewPost} />
                {/* <Posts /> */}
                {/* <section>
                    <FullPost id={this.state.selected_post_id} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;