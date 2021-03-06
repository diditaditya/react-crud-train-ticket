import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Table } from 'reactstrap';

import List from './List/Booking';
import DeleteConfirm from './Delete/DeleteConfirm';

import action from '../store/action';
import '../style/styles.css';

class BookingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            toBeDeletedId: null,
        }
    }

    toggleDeleteModal() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    setToBeDeletedId(id) {
        this.setState({
            toBeDeletedId: id,
        });
    }

    deleteReservation(id) {
        this.props.delete(id);
    }


    render() {
        return (
            <div>
                <div className="page-title-container" >
                    <h4 className="page-title" >DAFTAR PEMESANAN TIKET KERETA API</h4>
                    <h4 className="page-title" ><i>ticket reservation list</i></h4>
                </div>
                <Row>
                    <Col xs="1" sm="1" md="1" lg="2" xl="2" />
                    <Col xs="10" sm="10" md="10" lg="8" xl="8">
                        <Table bordered striped>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>ID</th>
                                    <th>PEMESAN <br /><i>Customer</i></th>
                                    <th>JUMLAH PENUMPANG <br /><i>Total Passengers</i></th>
                                    <th>ASAL <br /><i>Origin</i></th>
                                    <th>TUJUAN <br /><i>Destination</i></th>
                                    <th>PILIHAN <br /><i>Options</i></th>
                                </tr>
                            </thead>
                            <List 
                                list={this.props.reservations}
                                toggle={() => this.toggleDeleteModal()}
                                setToBeDeletedId={(id) => this.setToBeDeletedId(id)} 
                            />
                        </Table>
                    </Col>
                    <Col xs="1" sm="1" md="1" lg="2" xl="2" />
                </Row>
                <DeleteConfirm 
                    toggle={() => this.toggleDeleteModal()}
                    modal={this.state.modal}
                    id={this.state.toBeDeletedId}
                    delete={(id) => this.deleteReservation(id)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reservations: state.reservations,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => {dispatch(action.delete(id))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingList);