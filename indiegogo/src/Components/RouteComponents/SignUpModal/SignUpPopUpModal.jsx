import React, { Component } from 'react';
import "antd/dist/antd.css"
import SignUp from './SignUp';
import {Modal} from "antd"

class SignUpPopUpModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalVisible: false
        }
   
    }
    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
      }
    
    render() {
        return (
            <div>
                  <button onClick={() => this.setModalVisible(true)}>
              Open Modal
            </button>
            <Modal
        
          centered
            
            width = {350}
          visible={this.state.modalVisible}
          footer={null}
          onCancel={() => this.setModalVisible(false)}
        >
     <SignUp />
          
        </Modal>
            </div>
        );
    }
}

export default SignUpPopUpModal;