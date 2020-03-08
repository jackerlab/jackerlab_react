import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import KakaoMap from './components/KakaoMap';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm';
import SearchForm from './components/SearchForm';
import SignIn from './components/SignIn';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
ReactDOM.render(<KakaoMap />, document.getElementById('kakaomap2'));
ReactDOM.render(<LoginForm />, document.getElementById('loginform'));
ReactDOM.render(<SearchForm />, document.getElementById('searchform'));
ReactDOM.render(<SignIn />, document.getElementById('signin'));

// ReactDOM.render(<Router history = {browserHistory}>
//       <Route path = "/" component = {App}>
//          <IndexRoute component = {Home} />
//          <Route path = "home" component = {Home} />
//          <Route path = "about" component = {About} />
//          <Route path = "articles" component = {Articles} />
//       </Route>
//    </Router>, document.getElementById('root'));
