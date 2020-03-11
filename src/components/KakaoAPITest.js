import React from 'react';

// 설치 해야 함 : npm install --save react-addons-update
import update from 'react-addons-update';

// 설치 해야 함 : npm install --save react-html-parser
import ReactHtmlParser from 'react-html-parser';

export default class KakaoAPITest extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      query: 'jackerlab',
      data: [],
    };

    this.eventtest = this.eventtest.bind(this);
  }

componentDidMount() {
  this.eventtest();
}

eventtest() {
  // fetch 대신 axios 사용 하는 것도 있음
  fetch("https://dapi.kakao.com/v2/search/web" + `?query=${this.state.query}`, {
     method: 'GET',
     headers: {
      Authorization: 'KakaoAK key'
     }
   })
   .then(res => res.json())
   .then(json => {
     this.setState({
       data: this.state.data.concat(json.documents)

       // data: update(
       //   this.state.data,
       //   {
       //     $push: json.documents
       //   }
       // )
    });
  });
}

  render() {
    const listItems = this.state.data.map((result, i) =>
      <li className="list-group-item" key={i}>
        {ReactHtmlParser(result.title)}<br />
        {ReactHtmlParser(result.datetime)}<br />
        {ReactHtmlParser(result.url)}<br />
        {ReactHtmlParser(result.contents)}<br />
      </li>
    );

    return (
      <div className="container">
        <h3> Result </h3>
        <div className="input-group mb-3">
          <ul className="list-group">
            {listItems}
          </ul>
        </div>
      </div>
    );
  }
}
