import React from 'react';
import ContactInfo from './Contactinfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      keyword: '',
      contactData: [
      {
        name: 'test',
        phone: '010-0000-0000'
      },
      {
        name: 'jackerlab',
        phone: '010-0000-0000'
      },
    ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  handleClick(key) {
    this.setState({
      selectedKey: key
    });
  }

  handleCreate(contact){
    this.setState({
      contactData: update(this.state.contactData, { $push: [contact] })
    });
  }

  handleRemove() {
    this.setState({
      contactData: update(this.state.contactData,
        { $slice: [[this.state.selectedKey, 1]] }
      ),
      selectedKey: -1
    });
  }

  handleEdit(name, phone){
    this.setState({
      contactData: update(this.state.contactData,
        {
          [this.state.selectedKey]: {
            name: { $set: name },
            phone: {$set: phone }
          }
        }
      )
    });
  }

  render() {
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
        }
      )
      return data.map((contact, i) => {
        return (<ContactInfo
          contact={contact}
          key={i}
          onClick={() => this.handleClick(i)}
          />
        );
      });
    };

    return (
      <div>
        <h2>Contacts 테스트</h2>
        <input
          name="keyword"
          placeholder="입력하면 Search가 됩니다."
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
        <ContactDetails
          isSelected={this.state.selectedKey !== -1}
          contact={this.state.contactData[this.state.selectedKey]}
        />
      </div>
    )
  };
}
