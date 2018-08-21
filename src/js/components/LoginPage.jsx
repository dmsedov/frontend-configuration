import React from 'react';

export default class LoginPage extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target, 'target value');
    console.log(typeof this.props.login, 'type of login');
    console.log(this.props.login.toString(), 'toString');
    this.props.login({ name: e.target.elements[0].value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input className="form-control" type="text" placeholder="login" />
            {''}
            <button className="btn btn-primary" type="submit">Войти</button>
          </form>
        </div>
      </div>
    );
  }
}
