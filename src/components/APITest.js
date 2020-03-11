import React from 'react';

export default class APITest extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };

    this.eventtest = this.eventtest.bind(this);
  }

componentDidMount() {
  this.eventtest();
}

eventtest() {
   fetch("https://jsonplaceholder.typicode.com/todos/1")
   .then(res => res.json())
   .then(json => {
     this.setState({
       data: json.title
    });
  });
}

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }
}
