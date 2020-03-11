import React from 'react';

export default class ResultList extends React.Component {
  render() {
    const numbers = [
      '<b> iptables 1 </b>',
      'iptables 2',
      'iptables 3',
      'iptables 4',
      'iptables 5',
    ];

    const listItems = numbers.map((number, i) =>
      <li className="list-group-item" key={i}>{number}</li>
    );

    return (
      <ul className="list-group">
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
