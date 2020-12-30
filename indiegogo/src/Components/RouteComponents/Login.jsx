// import React, { Component } from "react";
// import LoginPopUpModal from "../../Project/LoginPopUpModal";
// import { Modal } from "antd";
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalVisible: false,
//     };
//   }
//   setModalVisible(modalVisible) {
//     this.setState({ modalVisible });
//   }
//   render() {
//     const { modalVisible } = this.state;
//     return (
//       <>
//         <button
//           onClick={this.handleLoginPage}
//           onClick={() => this.setModalVisible(true)}
//         >
//           Open Modal
//         </button>
//         <Modal
//           title="Vertically centered modal dialog"
//           centered
//           style={{ height: "600px" }}
//           visible={this.state.modalVisible}
//           onOk={() => this.setModalVisible(false)}
//           onCancel={() => this.setModalVisible(false)}
//         >
//           <div>HJJJKK</div>
//           <LoginPopUpModal></LoginPopUpModal>
//           <p>some contents...</p>
//           <p>some contents...</p>
//           <p>some contents...</p>
//         </Modal>
//       </>
//     );
//   }
// }
// export default Login;
