import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Table } from 'reactstrap';

import List from './List/Booking';

class BookingList extends Component {
    render() {
        return (
            <div>
                <h3>Reservation List</h3>
                <Row>
                    <Col xs="1" sm="1" md="1" lg="2" xl="2" />
                    <Col xs="10" sm="10" md="10" lg="8" xl="8">
                        <Table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Total Passengers</th>
                                    <th>Departure Origin</th>
                                    <th>Departure Destination</th>
                                </tr>
                            </thead>
                            <List list={this.props.reservations} />
                        </Table>
                    </Col>
                    <Col xs="1" sm="1" md="1" lg="2" xl="2" />
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reservations: state.reservations,
    }
}

export default connect(mapStateToProps, null)(BookingList);