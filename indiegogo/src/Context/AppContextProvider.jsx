import React from "react";
import axios from "axios";

const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth:false,
      data: [],
    };
    this.handleAuthentication = this.handleAuthentication.bind(this)
  }
  handleAuthentication({email,password}){
   
    axios({
        method:"post",
        url:"https://reqres.in/api/login",
        data:{
            email,
            password
        }
    })
    .then((res) =>{
        this.setState({
            isAuth:true
        })
    })
    .catch((err)=>{
        console.log(err)
    })

}

  componentDidMount() {
    axios({
      method: "get",
      url: "https://indiegogo-clone.herokuapp.com/db",
    }).then((res) => console.log(res));
  }

  render() {
    const { data } = this.state;
    const {handleAuthentication} = this
    const value = { data,handleAuthentication };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppContextProvider };
