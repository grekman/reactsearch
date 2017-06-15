import React, {Component} from 'react';
import axios from 'axios';


export default class MovieList extends Component {

state = {
  posts: [],
  loading: true,
  error: null
}
  componentDidMount () {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2cdce3bbe05c745f380ca0af5874a2d8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(res => {
        // console.log(res);
        this.setState({
        posts: res.data.results,
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
    <ul className="wraper">
      {posts.map(post =>
      <li key= {post.id} className="movie-wraper">
        <div className="poster">
          <img src ={ `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${post.poster_path}`}/>
        </div>
        <div className="description">
          <p><b>LANGUAGE: </b>{`     ${post.original_language}`}</p>
          <p><b>TITLE: </b>{`        ${post.original_title}`}</p>
          <p><b>DESCRIPTION: </b> {` ${post.overview}`}</p>
          <p><b>RATING: </b> {`      ${post.vote_average}`}</p>
        </div>
      </li>
      )}
    </ul>
  );
}
  render() {
    console.log(this.state);
    const {loading} = this.state;

    return (
      <div>
        <h1>Popular Movies</h1>
        {loading ? this.renderLoading() : this.renderPosts()}
      </div>
    )
  }
}
