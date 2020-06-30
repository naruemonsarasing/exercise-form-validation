import React from 'react';
import './App.css';
import Input from './components/Input/Input';

class App extends React.Component {
  state = {
    formData: {
      username: {
        value: ""
      },
      password: {
        value: ""
      },
      email: {
        value: ""
      },
      phoneNumber: {
        value: ""
      },
      firstName: {
        value: ""
      },
    }
  };

  onChangeInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    const updatedFormData = { ...this.state.formData };

    updatedFormData[fieldName].value = fieldValue;

    this.setState({ formData: updatedFormData });
  };

  onFinish = (e) => {
    e.preventDefault();
    console.log(this.state.formData);
  };

  render() {
    const { username, password, email, phoneNumber, firstName } = this.state.formData;

    return (
      <div className="RegisterForm">
        <form onSubmit={this.onFinish}>
          <Input
            name="username"
            value={username.value}
            onChangeInput={this.onChangeInput}
            placeholder="Username"
          />
          <Input
            name="password"
            value={password.value}
            onChangeInput={this.onChangeInput}
            type="password"
            placeholder="Password"
          />
          <Input
            name="email"
            value={email.value}
            onChangeInput={this.onChangeInput}
            placeholder="Email"
          />
          <Input
            name="phoneNumber"
            value={phoneNumber.value}
            onChangeInput={this.onChangeInput}
            placeholder="Phone Number"
          />
          <Input
            name="firstname"
            value={firstName.value}
            onChangeInput={this.onChangeInput}
            placeholder="First name"
          />
          <button className="Button">Register</button>
        </form>
      </div>
    );
  }
}

export default App;
