import React from "react";

const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      data: [],
    };
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleAuth({ email, password }) {
    if (email === "vinay@gmail.com" && password === "vinay") {
      this.setState({ isAuth: true });
    } else {
      console.log("error");
    }
  }

  render() {
    console.log(this.state.isAuth);
    const { data, isAuth } = this.state;
    const { handleAuth } = this;
    const value = {
      data,
      isAuth,
      handleAuth,
    };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppContextProvider };
