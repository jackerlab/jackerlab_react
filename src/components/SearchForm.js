import React from 'react';
import ResultList from './ResultList';

export default class SearchForm extends React.Component {
  render() {
    return (
      <div className="container">
        <label> [Server Search] </label>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search KeyWord" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
          </div>
        </div>

        <ResultList />
      </div>
    );
  }
}
