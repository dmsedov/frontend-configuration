import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

export default class LoginPage extends React.Component {
  successRespGoogle = (resp) => {
    console.log(resp);
    const { profileObj: { name } } = resp;
    const { history } = this.props;
    this.props.login({ name, history });
  }

  failedRespGoogle = (resp) => {
    console.log(resp, 'failed resp');
  }

  successRespFb = (resp) => {
    console.log(resp, 'resp from Fb');
    const { name } = resp;
    const { history } = this.props;
    this.props.login({ name, history });
  }

  render() {
    return (
      <div className="auth-service">
        <GoogleLogin
          clientId="582322058124-pcd9peaoa429t84v4ib28t1kd0gnhv4u.apps.googleusercontent.com"
          buttonText="Google"
          className="btn google-social"
          onSuccess={this.successRespGoogle}
          Failure={this.failedRespGoogle}
        />
        <FacebookLogin
          appId="318427492263139"
          fields="name,email,picture"
          callback={this.successRespFb}
          textButton="Facebook"
          cssClass="btn facebook-social"
        />

      </div>
    );
  }
}
