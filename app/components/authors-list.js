import React, {Component} from 'react';
import {Link} from 'react-router';

export default class AuthorsList extends Component {
  render() {
    return (
      <ul>
        <li><Link to ="books/books/1" >Author 1</Link></li>
        <li><Link to ="books/books/2" >Author 2</Link></li>
      </ul>

    )

  }
}
