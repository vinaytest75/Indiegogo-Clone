import React, { Component } from "react";
import styles from "./signup.module.css";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      newsletter: false,
      agree: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
  }
  handleChange(e) {
    const { value, name, type, checked } = e.target;
    let val = type === "checkbox" ? checked : value;
    this.setState({
      [name]: val,
    });
  }
  handleNewUser() {
    const {
      email,
      password,
      newsletter,
      agree,
      lastname,
      firstname,
    } = this.state;

    axios({
      method: "post",
      url: "http://localhost:8000/register",
      data: {
        email,
        password,
        newsletter,
        agree,
        lastname,
        firstname,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const {
      email,
      password,
      lastname,
      firstname,
      agree,
      newsletter,
    } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.centerdisplay}>
          <h1 className={styles.header}>Welcome </h1>
        </div>
        <br></br>
        <div className={styles.centerdisplay}>
          <div className={styles.subheader}>Sign Up to Join Indiegogo</div>
        </div>

        <div className={styles.label}>First Name</div>
        <input
          type="text"
          name="firstname"
          onChange={this.handleChange}
          value={firstname}
          placeholder="Your First Name"
        />

        <div className={styles.label}>Last Name</div>
        <input
          type="text"
          name="lastname"
          onChange={this.handleChange}
          value={lastname}
          placeholder="Your Last Name"
        />

        <div className={styles.label}>Email</div>
        <input
          type="text"
          name="email"
          onChange={this.handleChange}
          value={email}
          placeholder="Your Email"
        />

        <div className={styles.label}>Password</div>
        <input
          type="text"
          name="password"
          onChange={this.handleChange}
          value={password}
          placeholder="Your Password"
        />
        <br></br>
        <br></br>
        <div></div>
        <div style={{ marginLeft: "-130px" }}>
          <input
            type="checkbox"
            value={newsletter}
            name="newsletter"
            onChange={this.handleChange}
          />
          <span style={{ marginLeft: "-120px" }}>
            Sign me up for the Indiegogo newsletter
          </span>
        </div>
        <br></br>

        <div style={{ marginLeft: "-130px" }}>
          <input
            type="checkbox"
            value={agree}
            name="agree"
            onChange={this.handleChange}
          />
          <span style={{ marginLeft: "-120px" }}>
            I agree to the <span className={styles.signup}>Terms of Use</span>{" "}
            and have read
            <br></br>
            <span style={{ marginLeft: "160px" }}>
              and understand the{" "}
              <span className={styles.signup}> Privacy Policy</span>
            </span>
          </span>
        </div>
        <br></br>

        <button className={styles.loginbtn} onClick={this.handleNewUser}>
          CREATE ACCOUNT
        </button>
        <div className={styles.option}>OR</div>
        <div className={styles.bluebtn}>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/174/174848.svg"
            alt="logo"
            height="30px"
          />

          <span>CONTINUE WITH FACEBOOK</span>
        </div>
        <br></br>

        <div className={styles.postdetails}>
          No Posts without your Permission
        </div>
        <br></br>
        <br></br>

        <div className={styles.signupredirect}>
          Already have an account?{" "}
          <span className={styles.signup}>Sign Up</span>
        </div>
      </div>
    );
  }
}

export default SignUp;
