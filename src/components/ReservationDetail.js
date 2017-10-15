import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col, Table, Button } from 'reactstrap';

import ReserveeDetail from './Detail/Reservee';
import PassengersDetail from './Detail/Passenger';
import TrainDetail from './Detail/Train';

import detailSelector from '../helper/detailSelector';
import '../style/styles.css';

class BookingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = detailSelector(this.props.reservations, this.props.match.params.bookingId);
    }

    render() {
        if (this.props.reservations) {
            if (this.state === null) {
                return <Redirect to="/" />
            }
        }
        console.log(this.state);
        let reservee = {
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
        };
        let editUrl = `/${this.props.match.params.bookingId}/edit`;
        return (
            <div>
                <h4 className="page-title" >Reservation Detail</h4>
                <Row>
                    <Col xs="1" sm="1" md="1" lg="2" xl="2" />
                    <Col xs="10" sm="10" md="10" lg="8" xl="8">
                        <ReserveeDetail reservee={reservee} />
                        <PassengersDetail passengers={this.state.passengers} />
                        <TrainDetail depart={this.state.depart} return={this.state.return} />
                        <div className="button-container" >
                            <Link to="/"><Button size="lg" >Back</Button></Link>
                            <Link to={editUrl} ><Button size="lg" >Edit</Button></Link>
                        </div>
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

export default connect(mapStateToProps, null)(BookingDetail);