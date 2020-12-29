import React from "react";
import axios from "axios";

const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "https://indiegogo-clone.herokuapp.com/db",
    }).then((res) => console.log(res));
  }

  render() {
    const { data } = this.state;
    const value = { data };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppContextProvider };
