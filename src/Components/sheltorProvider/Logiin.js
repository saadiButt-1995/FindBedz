import React, { Component } from "react";
import ReactDOM from "react-dom";
class Logiin extends Component {
  state = {
    isPasswordShown: false,
  };

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  render = () => {
    const { isPasswordShown } = this.state;
    return (
      <div className="App">
        <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100">
              <form class="login100-form validate-form">
                <span class="login100-form-title p-b-26">
                  Welcome
                  <br />
                  <br />
                </span>

                <div class="wrap-input100 validate-input">
                  <input
                    class="input100"
                    placeholder="Email"
                    type="text"
                    name="email"
                    autoComplete="off"
                  />
                </div>

                <div class="wrap-input100 validate-input">
                  <input
                    class="input100"
                    placeholder="Password"
                    type={isPasswordShown ? "text" : "password"}
                    name="pass"
                  />
                  <i
                    className="fa fa-eye password-icon"
                    onClick={this.togglePasswordVisiblity}
                  />
                </div>

                <div class="container-login100-form-btn">
                  <div class="wrap-login100-form-btn">
                    <div class="login100-form-bgbtn" />
                    <button class="login100-form-btn">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Logiin />, rootElement);
