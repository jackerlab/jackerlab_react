import React, { Component } from 'react';
// import { Map, Marker, MarkerClusterer, Polyline } from 'react-kakao-maps';
import ReactDOM from 'react-dom';

declare var daum:any;

export default class KakaoMap extends React.Component {
  componentDidMount() {
    const el = document.getElementById('map1');
    let daumMap = new daum.maps.Map(el, {
      center: new daum.maps.LatLng(33.450701, 126.570667),
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2> 카카오 맵 호출 React </h2>
        <div className="Map" id="map1" style={ {width:'100px', height:'50px'} }></div>

      </React.Fragment>
    );
  }
}
