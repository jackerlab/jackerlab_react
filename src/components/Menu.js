import React from 'react';

import SearchForm from './SearchForm';
import KakaoSearch from './KakaoSearch';
import EventTest from './EventTest';

export default class Menu extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <div className="list-group" id="list-tab" role="tablist">
            <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
            <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
            <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
            <a className="list-group-item list-group-item-action" id="event-test-list" data-toggle="list" href="#event-test" role="tab" aria-controls="settings">Event Tests</a>
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><h1>Home</h1></div>
            <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><SearchForm /></div>
            <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><h1>김은우</h1></div>
            <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><KakaoSearch /></div>
            <div className="tab-pane fade" id="event-test" role="tabpanel" aria-labelledby="event-test-list"><EventTest /></div>
          </div>
        </div>
      </div>
    );
  }
}
