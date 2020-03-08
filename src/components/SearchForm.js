import React from 'react';
import ResultList from './ResultList';

export default class SearchForm extends React.Component {
  render() {
    return (
      <div class="container">
        <label> [Server Search] </label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search KeyWord" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
          </div>
        </div>

        <ResultList />
      </div>
    );
  }
}
