import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
          information: [
            {
              name:'',
              info1:'',
              info2:'',
            },
            {
              name:'',
              info1:'',
              info2:'',
            }
          ]
        };
        this.signIn = this.signIn.bind(this);
      }

    handleEmailChange(e){
      this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
      this.setState({password:e.target.value})
    }

    signIn(){
      alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);
    }

    render() {
        return (
            <form className="form-signin">
                <h2 className="form-signin-heading"> 검색 Form </h2>
                <label for="inputEmail" className="sr-only">Email address : </label>
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <br />
                <label for="inputPassword" className="sr-only">Password : </label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                <br />
                <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>
            </form>
        )
    }
}
