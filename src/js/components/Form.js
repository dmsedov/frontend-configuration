import React from 'react';

export default class Form extends React.Component {
  state = {
    form: {
      email: '',
      password: '',
      city: '',
      country: '',
      address: '',
      acceptRules: false,
    },
    submitted: false,
  };

  handleChangeField = (fieldName, { target: { value } }) => {
    const { form } = this.state;
    this.setState({ form: { ...form, [fieldName]: value } });
  }

  handleChangeAcceptRules = () => {
    const { form } = this.state;
    const value = form.acceptRules;
    this.setState({ form: { ...form, acceptRules: !value } });
  }

  handleChangePassword = this.handleChangeField.bind(null, 'password');
  handleChangeEmail = this.handleChangeField.bind(null, 'email');
  handleChangeAddress = this.handleChangeField.bind(null, 'address');
  handleChangeCity = this.handleChangeField.bind(null, 'city');
  handleChangeCountry = this.handleChangeField.bind(null, 'country');

  handleBackToForm = (e) => {
    e.preventDefault();
    this.setState({ submitted: false });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    return this.state.submitted ? this.renderResult() : this.renderForm();
  }

  renderResult() {
    const { form } = this.state;
    const keys = Object.keys(form);
    keys.sort();
    return [
      <a href="#" key="backLink" onClick={this.handleBackToForm}>Back</a>,
      <table key="fieldsValues" className="table">
        <tbody>
          {keys.map(key => <tr key={key}><td>{key}</td><td>{form[key].toString()}</td></tr>)}
        </tbody>
      </table>,
    ];
  }

  renderForm() {
    const { form } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">Email</label>
            <input type="email" onChange={this.handleChangeEmail} value={form.email}
              className="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">Password</label>
            <input type="password" onChange={this.handleChangePassword} value={form.password}
              className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">Address</label>
          <textarea type="text" value={form.address} onChange={this.handleChangeAddress} className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">City</label>
            <input type="text" onChange={this.handleChangeCity} value={form.city} className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">Country</label>
            <select id="inputCountry" onChange={this.handleChangeCountry} className="form-control" value={form.country}>
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input id="rules" className="form-check-input" onChange={this.handleChangeAcceptRules} type="checkbox" checked={form.acceptRules} /> Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
};
