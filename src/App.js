import React from 'react';
import './App.css';
import Input from './components/Input/Input';

class App extends React.Component {
  state = {
    formData: {
      username: {
        value: "",
        validator: {
          minLength: 6,
          maxLength: 12,
          required: true,
        },
        error: { status: true, message: "", isTouch: false }
      },
      password: {
        value: "",
        validator: {
          minLength: 12,
          maxLength: 24,
          required: true
        },
        error: { status: true, message: "", isTouch: false }
      },
      email: {
        value: "",
        validator: {
          required: true,
          email: true
        },
        error: { status: true, message: "", isTouch: false }
      },
      phoneNumber: {
        value: "",
        validator: {
          minLength: 9,
          maxLength: 10
        },
        error: { status: true, message: "", isTouch: false }
      },
      firstName: {
        value: "",
        validator: {
          minLength: 4,
          maxLength: 12
        },
        error: { status: true, message: "", isTouch: false }
      },
    },
    isFormValid: false,
  };

  onChangeInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const updatedFormData = { ...this.state.formData };

    let { isValid, errorMessage } = this.checkValue(fieldValue, this.state.formData[fieldName].validator);

    updatedFormData[fieldName].value = fieldValue;
    updatedFormData[fieldName].error.status = !isValid;
    updatedFormData[fieldName].error.message = errorMessage;
    updatedFormData[fieldName].error.isTouch = true;

    let newIsFormValid = true;
    for (let fn in updatedFormData) {
      if (updatedFormData[fn].validator.required === true) {
        newIsFormValid = !updatedFormData[fn].error.status && newIsFormValid;
      }
    }

    this.setState({ formData: updatedFormData, isFormValid: newIsFormValid });
  };

  checkValue = (value, rules) => {
    let isValid = true;
    let errorMessage = "";
    let trimedValue = value.trim();

    if (rules.maxLength && trimedValue.length > rules.maxLength) {
      isValid = false;
      errorMessage = `ช่องนี้ต้องยาวไม่เกิน ${rules.maxLength} ตัว`;
    }

    if (rules.minLength && trimedValue.length < rules.minLength) {
      isValid = false;
      errorMessage = `ช่องนี้ต้องยาวอย่างน้อย ${rules.minLength} ตัว`;
    }

    const regEx = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");

    if (rules.email && !regEx.test(trimedValue)) {
      isValid = false;
      errorMessage = `รูปแบบ Email ของคุณคืออะไร กรอกใหม่ซิ`;
    }

    if (rules.required && trimedValue.length === 0) {
      isValid = false;
      errorMessage = `กรอกช่องนี้ด้วยนะ`;
    }

    return { isValid, errorMessage };
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
            error={username.error}
          />
          <Input
            name="password"
            value={password.value}
            onChangeInput={this.onChangeInput}
            type="password"
            placeholder="Password"
            error={password.error}
          />
          <Input
            name="email"
            value={email.value}
            onChangeInput={this.onChangeInput}
            placeholder="Email"
            error={email.error}
          />
          <Input
            name="phoneNumber"
            value={phoneNumber.value}
            onChangeInput={this.onChangeInput}
            placeholder="Phone Number"
            error={phoneNumber.error}
          />
          <Input
            name="firstName"
            value={firstName.value}
            onChangeInput={this.onChangeInput}
            placeholder="First name"
            error={firstName.error}
          />
          <button disabled={!this.state.isFormValid} className="Button">Register</button>
        </form>
      </div>
    );
  }
}

export default App;
