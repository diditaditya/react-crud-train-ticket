import React, { Component } from 'react';
import { 
    Modal, 
    ModalFooter, 
    ModalBody, 
    ModalHeader,
    Button } from 'reactstrap';

class DeleteConfirm extends Component {
    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={() => this.props.toggle()} >
                    <ModalHeader toggle={() => this.props.toggle()} >Delete Reservation</ModalHeader>
                    <ModalBody>Do you want to delete the reservation (ID: {this.props.id}) ?</ModalBody>
                    <ModalFooter>
                        <Button onClick={() => this.props.toggle()} >Cancel</Button>
                        <Button 
                            onClick={(id) => {
                                this.props.delete(this.props.id);
                                this.props.toggle();
                                }
                            }
                        >
                            Delete
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default DeleteConfirm;