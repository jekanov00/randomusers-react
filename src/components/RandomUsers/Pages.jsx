import React, { Component } from 'react';
import { getUsers } from './../../api';

class Pages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageCount: props.pageCount,
      page: props.currentPage,
    };
  }

  pageHandler(desiredPage) {
    const { pagesData, userList } = this.props;
    getUsers({ ...userList.info, page: desiredPage })
      .then(data => {
        this.setState({
          page: desiredPage,
        });
        pagesData({
          userList: data,
          isLoaded: true,
          page: desiredPage,
        });
      })
      .catch(e => {
        pagesData({
          isLoaded: false,
          error: e,
        });
      });
  }

  render() {
    const { pageCount, page } = this.state;
    let pages = [];

    //pages with dots on both sides
    if (page > 3 && page < pageCount - 2) {
      pages.push(
        <li
          key={1}
          className={'page'}
          onClick={() => {
            this.pageHandler(1);
          }}
        >
          {1}
        </li>
      );
      pages.push(
        <li key={page - 2} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
          ...
        </li>
      );
      for (let i = page - 1; i <= page + 1; i++) {
        if (i === page) {
          pages.push(
            <li key={i} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
              {i}
            </li>
          );
        } else {
          pages.push(
            <li
              key={i}
              className={'page'}
              onClick={() => {
                this.pageHandler(i);
              }}
            >
              {i}
            </li>
          );
        }
      }
      pages.push(
        <li key={page + 2} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
          ...
        </li>
      );
      pages.push(
        <li
          key={pageCount}
          className={'page'}
          onClick={() => {
            this.pageHandler(pageCount);
          }}
        >
          {pageCount}
        </li>
      );
    }

    // pages with dots on one side

    // 1
    if (1 === page) {
      pages.push(
        <li key={1} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
          {1}
        </li>
      );
      pages.push(
        <li
          key={2}
          className={'page'}
          onClick={() => {
            this.pageHandler(2);
          }}
        >
          {2}
        </li>
      );
      pages.push(
        <li key={page + 2} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
          ...
        </li>
      );
      pages.push(
        <li
          key={pageCount}
          className={'page'}
          onClick={() => {
            this.pageHandler(pageCount);
          }}
        >
          {pageCount}
        </li>
      );
    }

    // 2
    if (page === 2) {
      pages.push(
        <li
          key={1}
          className={'page'}
          onClick={() => {
            this.pageHandler(1);
          }}
        >
          {1}
        </li>
      );
      for (let i = 2; i <= page + 1; i++) {
        if (i === page) {
          pages.push(
            <li key={i} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
              {i}
            </li>
          );
        } else {
          pages.push(
            <li
              key={i}
              className={'page'}
              onClick={() => {
                this.pageHandler(i);
              }}
            >
              {i}
            </li>
          );
        }
      }
      pages.push(
        <li key={page + 2} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
          ...
        </li>
      );
      pages.push(
        <li
          key={pageCount}
          className={'page'}
          onClick={() => {
            this.pageHandler(pageCount);
          }}
        >
          {pageCount}
        </li>
      );
    }

    // 3
    if (page === 3) {
      pages.push(
        <li
          key={1}
          className={'page'}
          onClick={() => {
            this.pageHandler(1);
          }}
        >
          {1}
        </li>
      );
      for (let i = page - 1; i <= page + 1; i++) {
        if (i === page) {
          pages.push(
            <li key={i} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
              {i}
            </li>
          );
        } else {
          pages.push(
            <li
              key={i}
              className={'page'}
              onClick={() => {
                this.pageHandler(i);
              }}
            >
              {i}
            </li>
          );
        }
      }
      pages.push(
        <li key={page + 2} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
          ...
        </li>
      );
      pages.push(
        <li
          key={pageCount}
          className={'page'}
          onClick={() => {
            this.pageHandler(pageCount);
          }}
        >
          {pageCount}
        </li>
      );
    }

    // last - 2
    if (page === pageCount - 2) {
      pages.push(
        <li
          key={1}
          className={'page'}
          onClick={() => {
            this.pageHandler(1);
          }}
        >
          {1}
        </li>
      );
      pages.push(
        <li key={page - 2} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
          ...
        </li>
      );
      for (let i = page - 1; i <= page + 1; i++) {
        if (i === page) {
          pages.push(
            <li key={i} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
              {i}
            </li>
          );
        } else {
          pages.push(
            <li
              key={i}
              className={'page'}
              onClick={() => {
                this.pageHandler(i);
              }}
            >
              {i}
            </li>
          );
        }
      }
      pages.push(
        <li
          key={pageCount}
          className={'page'}
          onClick={() => {
            this.pageHandler(pageCount);
          }}
        >
          {pageCount}
        </li>
      );
    }

    //last - 1
    if (page === pageCount - 1) {
      pages.push(
        <li
          key={1}
          className={'page'}
          onClick={() => {
            this.pageHandler(1);
          }}
        >
          {1}
        </li>
      );
      pages.push(
        <li key={page - 2} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
          ...
        </li>
      );
      for (let i = page - 1; i <= page; i++) {
        if (i === page) {
          pages.push(
            <li key={i} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
              {i}
            </li>
          );
        } else {
          pages.push(
            <li
              key={i}
              className={'page'}
              onClick={() => {
                this.pageHandler(i);
              }}
            >
              {i}
            </li>
          );
        }
      }
      pages.push(
        <li
          key={pageCount}
          className={'page'}
          onClick={() => {
            this.pageHandler(pageCount);
          }}
        >
          {pageCount}
        </li>
      );
    }

    //last page

    if (pageCount === page) {
      pages.push(
        <li
          key={1}
          className={'page'}
          onClick={() => {
            this.pageHandler(1);
          }}
        >
          {1}
        </li>
      );
      pages.push(
        <li key={pageCount - 2} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
          ...
        </li>
      );
      pages.push(
        <li
          key={pageCount - 1}
          className={'page'}
          onClick={() => {
            this.pageHandler(pageCount - 1);
          }}
        >
          {pageCount - 1}
        </li>
      );
      pages.push(
        <li key={pageCount} className={'page'} style={{ backgroundColor: '#F0F8FF', cursor: 'initial' }}>
          {pageCount}
        </li>
      );
    }

    return pages.map(p => p);
  }
}

export default Pages;
