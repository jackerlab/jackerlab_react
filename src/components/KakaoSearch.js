import React from 'react';

import Search from './Search';

export default class KakaoSearch extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        query: null,
        bookInfo: null,
      };
  }

  _getQueryValue = async value => {
    await this.setState({query: value});
    this._getBooks();
  }

  _getBooks = async () => {
    const bookInfo = await this._callApi();
    this.setState({
      bookInfo,
    });
  }

  _callApi = () => {
    const _apiKey = 'KakaoAK 1b0987d0f45d6ea74e358e85381c79e1';
    const _url = 'https://dapi.kakao.com/v2/search/web';
    const _getQuery = `?query=${this.state.query}`;

    const _myHeaders = new Headers();
    _myHeaders.append('Authorization', _apiKey);

    const _init = {
      method: 'get',
      headers: _myHeaders,
    };

    return fetch(_url + _getQuery, _init)
    .then(res => res.json())
    .then(json => json.documents)
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Search books={this._callApi} query={this._getQueryValue} />
      </div>
    );
  }
}
