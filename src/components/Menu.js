import React from 'react';

import SearchForm from './SearchForm';
import KakaoSearch from './KakaoSearch';
import EventTest from './EventTest';
import APITest from './APITest';
import KakaoAPITest from './KakaoAPITest';

export default class Menu extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <div className="list-group" id="list-tab" role="tablist">
            <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
            <a className="list-group-item list-group-item-action" id="server-search-test-list" data-toggle="list" href="#server-search-test" role="tab" aria-controls="profile">Server Search Test</a>
            <a className="list-group-item list-group-item-action" id="kakao-serach-test-list" data-toggle="list" href="#kakao-serach-test" role="tab" aria-controls="messages">Kakao Search Test</a>
            <a className="list-group-item list-group-item-action" id="event-test-list" data-toggle="list" href="#event-test" role="tab" aria-controls="settings">Event Test</a>
            <a className="list-group-item list-group-item-action" id="api-test-list" data-toggle="list" href="#api-test" role="tab" aria-controls="settings">API Test</a>
            <a className="list-group-item list-group-item-action" id="kakao-api-test-list" data-toggle="list" href="#kakao-api-test" role="tab" aria-controls="settings">Kakao API Test</a>
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><h1>Home</h1></div>
            <div className="tab-pane fade" id="server-search-test" role="tabpanel" aria-labelledby="server-search-test-list"><SearchForm /></div>
            <div className="tab-pane fade" id="kakao-serach-test" role="tabpanel" aria-labelledby="kakao-serach-test-list"><KakaoSearch /></div>
            <div className="tab-pane fade" id="event-test" role="tabpanel" aria-labelledby="event-test-list"><EventTest /></div>
            <div className="tab-pane fade" id="api-test" role="tabpanel" aria-labelledby="api-test-list"><APITest /></div>
            <div className="tab-pane fade" id="kakao-api-test" role="tabpanel" aria-labelledby="kakao-api-test-list"><KakaoAPITest /></div>
          </div>
        </div>
      </div>
    );
  }
}
