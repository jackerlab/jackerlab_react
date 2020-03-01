import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import KakaoMap from './components/KakaoMap';
import Contact from './components/Contact';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
ReactDOM.render(<KakaoMap />, document.getElementById('kakaomap2'));
