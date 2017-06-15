import React, {Component} from 'react';
import axios from 'axios';


export default class ArticlesList extends Component {

state = {
  posts: [],
  loading: true,
  error: null
}
  componentDidMount () {
    axios.get('https://www.reddit.com/r/reactjs.json')
      .then(res => {
        // console.log(res);
        this.setState({
        posts: res.data.data.children,
        loading: false,
        error: null
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });


 }
renderLoading() {
  return (
    <div>Loading..</div>
  )}

renderError() {
  return (
    <div>Something went wrong {this.state.error.message} </div>
  );
}

renderPosts() {
  const {error, posts} = this.state;

  if(error) {
    return this.renderError;
  }

// console.log(posts);
  return (
    <ul>
      {posts.map(post =>
      <li key= {post.data.title}><a href = {post.data.url}>{post.data.title}</a></li>
      )}
    </ul>
  );
}
  render() {
    console.log(this.state);
    const {loading} = this.state;

    return (
      <div>
        <h1>React Articles</h1>
        {loading ? this.renderLoading() : this.renderPosts()}
      </div>
    )
  }
}
