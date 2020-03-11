import React from 'react';

import ResultList from './ResultList';

export default class EventTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
  };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({data:
      [
        'iptables 1',
        'iptables 2',
        'iptables 3',
        'iptables 4',
        'iptables 5',
      ]
    });
  }

  render() {
    const listItems = this.state.data.map((result, i) =>
      <li className="list-group-item" key={i}>{result}</li>
    );

    return (
      <div className="container">
        <label> [Event Test] </label>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search KeyWord" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleClick}>Search</button>
          </div>
        </div>

        <div>
          <h3> Reslut </h3>
          <ul className="list-group">
            {listItems}
          </ul>
        </div>
      </div>
    );
  }
}
