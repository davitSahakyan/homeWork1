import React from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

import './Login.css';

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          userName: '',
          password: ''
      }

      this.handleChange = this.handleChange.bind(this)
      this.loginClick = this.loginClick.bind(this)
  }

  loginClick () {
      this.props.onSubmitButtonClick(this.state)
  }

  handleChange(e) {
      switch (e.target.name) {
          case "login":
              this.setState(prevState => ({userName: e.target.value}))
              break;
          default:
              this.setState(prevState => ({password: e.target.value}))
      }
  }

  render() {
      return(
          <div className="login">
              <TextField
                  id="outlined-password-input"
                  label="Login"
                  type="text"
                  name="login"
                  className="input-field"
                  onChange={this.handleChange}
              />
              <TextField
                  id="outlined-text-input"
                  label="Password"
                  type="password"
                  name="password"
                  className="input-field"
                  onChange={this.handleChange}
              />

              <Button variant="contained" onClick={this.loginClick}>Login</Button>
          </div>
      )
  }
}

export default Login