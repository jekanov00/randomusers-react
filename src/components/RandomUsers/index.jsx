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
      error: null,
    };
  }

  componentDidMount() {
    getUsers()
      .then(data => {
        this.setState({
          userList: data,
          isLoaded: true,
        });
      })
      .catch(e => {
        this.setState({
          isLoaded: false,
          error: e,
        });
      });
  }

  render() {
    const { isLoaded, userList, error } = this.state;
    if (isLoaded) {
      return (
        <ol className={'cardsContainer'}>
          {userList.results.map(u => {
            return <li key={u.email}>{<UserCard {...u} />}</li>;
          })}
        </ol>
      );
    } else if (error) {
      return (
        <div style={{ marginTop: window.innerHeight / 2 - 50 }} className={'error'}>
          Error: {error}
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: window.innerHeight / 2 - 50 }} className={'loading'}>
          Loading...
        </div>
      );
    }
  }
}

export default RandomUsers;
