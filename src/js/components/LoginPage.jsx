import React from 'react';

export default class LoginPage extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    this.props.login({ name: e.target[0].value, history });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input className="form-control" type="text" placeholder="login" />
            <button className="btn btn-primary" type="submit">Войти</button>
          </form>
        </div>
      </div>
    );
  }
}
