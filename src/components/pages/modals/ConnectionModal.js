import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'

class ConnectionModal extends Component {

    render() {
        const { modalSize, modalVisible, modalOnClose } = this.props;
        return (
            <Modal size={modalSize} open={modalVisible} onClose={modalOnClose}>
                <Modal.Header>ตั้งค่าการเชื่อมต่อ</Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete your account</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative>No</Button>
                    <Button positive icon='checkmark' labelPosition='right' content='Yes' />
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ConnectionModal;