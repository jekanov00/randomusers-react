import React, { Component } from 'react';
import { getUsers } from './../../api';
import UserCard from './../UserCard';
import './RandomUsers.scss';
import Pages from './Pages';

class RandomUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      userList: null,
      error: null,
      page: 1,
      pageCount: props.pages,
    };
  }

  componentDidMount() {
    getUsers({ results: 30 })
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

  getPagesData(data) {
    this.setState(data);
  }

  handleRetry() {
    getUsers({ ...this.state.userList?.info })
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
      const {
        userList: {
          info: { page },
        },
        pageCount,
      } = this.state;

      return (
        <>
          <ol className={'cardsContainer'}>
            {userList.results.map(u => {
              return <li key={u.email}>{<UserCard {...u} />}</li>;
            })}
          </ol>
          <ol className={'pagesContainer'}>
            <Pages
              currentPage={page}
              pageCount={pageCount}
              userList={userList}
              pagesData={data => {
                this.getPagesData(data);
              }}
            />
          </ol>
        </>
      );
    } else if (error) {
      return (
        <>
          <div style={{ marginTop: window.innerHeight / 2 - 50 }} className={'error'}>
            Error: {error.message}
          </div>
          <button
            className={'retryBtn'}
            onClick={() => {
              this.handleRetry();
            }}
          >
            Retry
          </button>
        </>
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
