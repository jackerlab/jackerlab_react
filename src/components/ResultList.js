import React from 'react';

export default class ResultList extends React.Component {
  render() {
    const numbers = [
      'iptables 1',
      'iptables 2',
      'iptables 3',
      'iptables 4',
      'iptables 5',
    ];

    const listItems = numbers.map((number) =>
      <li class="list-group-item">{number}</li>
    );

    return (
      <ul class="list-group">
        {listItems}
      </ul>

      // <ul class="list-group">
      //   <li class="list-group-item">Cras justo odio</li>
      //   <li class="list-group-item">Dapibus ac facilisis in</li>
      //   <li class="list-group-item">Morbi leo risus</li>
      //   <li class="list-group-item">Porta ac consectetur ac</li>
      //   <li class="list-group-item">Vestibulum at eros</li>
      // </ul>
    );
  }
}
