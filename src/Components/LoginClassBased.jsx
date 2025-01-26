import React from "react";

class LoginClassBased extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
    };
  }
  render() {
    const handleClick = () => {
      this.setState((prevState) => ({
        login: !prevState.login,
      }));
    };

    return (
      <div>
        <h1>This is Class component</h1>
        <button onClick={handleClick}>
          {this.state.login ? "signout" : "signin"}
        </button>
      </div>
    );
  }
}

export default LoginClassBased;
