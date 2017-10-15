import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Row,
    Col,
    Button
} from 'reactstrap';

import ReserveeForm from './Edit/Reservee';
import PassengerForm from './Edit/Passenger';
import TrainForm from './Edit/Train';

import action from '../store/action';
import validator from '../helper/formValidator';
import detailSelector from '../helper/detailSelector';
import '../style/styles.css';

class AddBooking extends Component {
    constructor(props) {
        super(props);
        this.state = detailSelector(this.props.reservations, this.props.match.params.bookingId);
    }

    setInitialState() {
        this.setState({
            message: '',
            fireRedirect: false,
        }, () => {
            console.log(this.state);
        });
    }

    componentDidMount() {
        this.setInitialState();
    }

    generateId(list) {
        if (list.length > 0) {
            let maxId = 0;
            list.map(reserved => {
                if (parseInt(reserved.id, 10) >= maxId) {
                    maxId = parseInt(reserved.id, 10);
                }
                return null;
            });
            return maxId + 1;
        }
        return 1;
    }

    onCustomerNameChange(data) {
        this.setState({
            name: data,
        });
    }

    onCustomerAddressChange(data) {
        this.setState({
            address: data,
        });
    }

    onCustomerPhoneChange(data) {
        this.setState({
            phone: data,
        });
    }

    onPassengerNameChange(data, index) {
        let passengers = this.state.passengers;
        passengers[index].name = data;
        this.setState({
            passengers: passengers,
        });
    }

    onPassengerIdChange(data, index) {
        let passengers = this.state.passengers;
        passengers[index].idCardNumber = data;
        this.setState({
            passengers: passengers,
        });
    }

    onPassengerTypeChange(data, index) {
        let passengers = this.state.passengers;
        passengers[index].type = data;
        this.setState({
            passengers: passengers,
        });
    }

    onDepartTrainChange(data, attribute) {
        let depart = this.state.depart;
        depart[attribute] = data;
        this.setState({
            depart: depart,
        });
    }

    onReturnTrainChange(data, attribute) {
        let returnTrain = this.state.return;
        returnTrain[attribute] = data;
        this.setState({
            return: returnTrain,
        });
    }

    onSubmit() {
        let data = this.state;
        data.createdAt = new Date();
        delete data.message;
        delete data.fireRedirect;
        let reserveeCheck = validator.reserveeCheck(data);
        if (reserveeCheck.status) {
            let passengersCheck = validator.passengersCheck(data);
            if (passengersCheck.status) {
                data.totalPassengers = passengersCheck.passengers;
                let departCheck = validator.trainCheck(data.depart);
                if (departCheck.status) {
                    let returnCheck = validator.trainCheck(data.return);
                    if (returnCheck.status) {
                        this.props.updateBooking(data);
                        this.setState({
                            fireRedirect: true,
                        })
                    }
                    return this.setState({
                        message: returnCheck.error,
                    });
                }
                return this.setState({
                    message: departCheck.error,
                });
            }
            return this.setState({
                message: passengersCheck.error,
            });
        }
        return this.setState({
            message: reserveeCheck.error,
        });
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
        let url = `/${this.props.match.params.bookingId}`;
        return (
            <div>
                <h3>Ticket Reservation</h3>
                <Row>
                    <Col xs="1" sm="1" md="1" lg="2" xl="2" />
                    <Col xs="10" sm="10" md="10" lg="8" xl="8">
                        <ReserveeForm
                            reservee={reservee}
                            onNameChange={(data) => this.onCustomerNameChange(data)}
                            onAddressChange={(data) => this.onCustomerAddressChange(data)}
                            onPhoneChange={(data) => this.onCustomerPhoneChange(data)}
                        />
                        <PassengerForm
                            passengers={this.state.passengers}
                            onNameChange={(index, data) => this.onPassengerNameChange(index, data)}
                            onIdChange={(index, data) => this.onPassengerIdChange(index, data)}
                            onTypeChange={(index, data) => this.onPassengerTypeChange(index, data)}
                        />
                        <TrainForm
                            depart={this.state.depart}
                            return={this.state.return}
                            onDepartChange={(data, attr) => this.onDepartTrainChange(data, attr)}
                            onReturnChange={(data, attr) => this.onReturnTrainChange(data, attr)}
                        />
                        <div>
                            <Button>Cancel</Button>
                            <Button onClick={() => this.onSubmit()} >Submit</Button>
                            {
                                this.state.fireRedirect && <Redirect to={url} />
                            }
                        </div>
                        <p>{this.state.message}</p>
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateBooking: (booking) => { dispatch(action.update(booking)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBooking);