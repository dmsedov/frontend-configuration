import React from 'react';
import GoogleLogin from 'react-google-login';

export default class LoginPage extends React.Component {
  successRespGoogle = (resp) => {
    console.log(resp);
    const { w3: { ig } } = resp;
    const { history } = this.props;
    this.props.login({ name: ig, history });
  }

  faliedRespGoogle = (resp) => {
    console.log(resp, 'failed resp');
  }

  render() {
    return (
      <div className="auth-service">
        <GoogleLogin
          clientId="582322058124-pcd9peaoa429t84v4ib28t1kd0gnhv4u.apps.googleusercontent.com"
          buttonText="Google"
          className="btn google-social"
          onSuccess={this.successRespGoogle}
          Failure={this.faliedRespGoogle}
        />
      </div>
      // <div className="row">
      //   <div className="col-md-12">
      //     <form className="form-inline" onSubmit={this.handleSubmit}>
      //       <input className="form-control" type="text" placeholder="login" />
      //       <button className="btn btn-primary" type="submit">Войти</button>
      //     </form>
      //   </div>
      // </div>
    );
  }
}
