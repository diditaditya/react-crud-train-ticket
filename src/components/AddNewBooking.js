import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    Row, 
    Col,
    Alert, 
    Button } from 'reactstrap';

import PassengerForm from './Add/Passenger';
import ReserveeForm from './Add/Reservee';
import TrainForm from './Add/Train';

import action from '../store/action';
import validator from '../helper/formValidator';
import '../style/styles.css';

class AddBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    setInitialState() {
        this.setState({
            id: this.generateId(this.props.reservations),
            name: '',
            address: '',
            phone: '',
            depart: {
                trainName: '',
                class: 'Executive',
                origin: '',
                destination: '',
                date: '',
                time: '',
            },
            return: {
                trainName: '',
                class: '',
                origin: '',
                destination: '',
                date: '',
                time: '',
            },
            passengers: [
                {
                    name: '',
                    idCardNumber: '',
                    type: 'Adult',
                },
                {
                    name: '',
                    idCardNumber: '',
                    type: '',
                },
                {
                    name: '',
                    idCardNumber: '',
                    type: '',
                },
                {
                    name: '',
                    idCardNumber: '',
                    type: '',
                }
            ],
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
                        this.props.addNewBooking(data);
                        this.setState({
                            fireRedirect: true,
                        })
                    }
                    return this.setState({
                        message: returnCheck.error,
                    });
                }
                return this.setState({
                    message: "Depart train detail may not be empty",
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
        // console.log(this.state);
        return (
                <div>
                    <h4 className="page-title" >Ticket Reservation</h4>
                    <Row>
                        <Col xs="1" sm="1" md="1" lg="2" xl="2" />
                        <Col xs="10" sm="10" md="10" lg="8" xl="8">
                            <ReserveeForm 
                                values={this.state}
                                onNameChange={(data) => this.onCustomerNameChange(data)}
                                onAddressChange={(data) => this.onCustomerAddressChange(data)}
                                onPhoneChange={(data) => this.onCustomerPhoneChange(data)}
                            />
                            <PassengerForm
                                values={this.state}
                                onNameChange={(index, data) => this.onPassengerNameChange(index, data)}
                                onIdChange={(index, data) => this.onPassengerIdChange(index, data)}
                                onTypeChange={(index, data) => this.onPassengerTypeChange(index, data)}
                            />
                            <TrainForm
                                values={this.state}
                                onDepartChange={(data, attr) => this.onDepartTrainChange(data, attr)}
                                onReturnChange={(data, attr) => this.onReturnTrainChange(data, attr)}
                            />
                            {
                                this.state.message &&
                                <Alert color="warning" >
                                    {this.state.message}
                                </Alert>
                            }
                            <div className="button-container">
                                <Link to="/" ><Button size="lg" >Cancel</Button></Link>
                                <Button size="lg" onClick={() => this.onSubmit()} >Submit</Button>
                                {
                                    this.state.fireRedirect && <Redirect to="/" />
                                }
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

const mapDispatchToProps = (dispatch) => {
    return {
        addNewBooking: (booking) => {dispatch(action.add(booking))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBooking);