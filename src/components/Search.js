import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  _inpTxt = e => {
    this.setState({ value: e.target.value });
  }

  _setQuery = () => {
    this.props.query(this.state.value);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this._inpTxt} />
        <button type="button" onClick={this._setQuery}>
          검색
        </button>
      </div>
    );
  }
}
