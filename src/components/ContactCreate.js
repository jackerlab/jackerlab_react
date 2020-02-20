import React from 'react';

export default class  ContactCreate extends React.Component {
  render() {
    return (
      <div>
        <h2>Create Contact</hw>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
          />
        </p>
      </div>
    )
  }
}
