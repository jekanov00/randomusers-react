import React, { Component } from 'react';
import { getUsers } from './../../api';
import UserCard from './../UserCard';
import './RandomUsers.css';

class RandomUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      userList: null,
    };
  }

  componentDidMount() {
    getUsers().then(data => {
      this.setState({
        userList: data,
        isLoaded: true,
      });
    });
  }

  render() {
    const { isLoaded, userList } = this.state;
    if (isLoaded) {
      return (
        <ol className={'cardsContainer'}>
          {userList.results.map(u => {
            return <li key={u.email}>{<UserCard {...u} />}</li>;
          })}
        </ol>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default RandomUsers;
