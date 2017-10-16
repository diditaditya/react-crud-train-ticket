import React, { Component } from 'react';
import {
    Input,
    Table
} from 'reactstrap';

import '../../style/styles.css';

class Train extends Component {
    constructor(props) {
        super(props);
        this.state = {
            depart: this.props.depart,
            return: this.props.return,
        };
    }

    onDepartChange(event, attr) {
        let depart = this.state.depart;
        let value = event.target.value;
        depart[attr] = value;
        this.setState({
            depart: depart,
        }, () => {
            this.props.onDepartChange(value, attr);
        });
    }

    onReturnChange(event, attr) {
        let returnTrain = this.state.return;
        let value = event.target.value;
        returnTrain[attr] = value;
        this.setState({
            return: returnTrain,
        }, () => {
            this.props.onReturnChange(value, attr);
        });
    }

    render() {
        return (
            <div>
                <h5 className="form-section-title" >DATA PERJALANAN / <i>Booking Details</i></h5>
                <Table bordered >
                    <thead>
                        <tr>
                            <th ></th>
                            <th>PERGI /<i>Depart</i></th>
                            <th>PULANG /<i>Return</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="table-col-label" >NAMA KERETA API <br /> <i>Train Name</i></th>
                            <td className="table-col-input" >
                                <Input type="text" value={this.state.depart.trainName} onChange={(e, attr) => this.onDepartChange(e, "trainName")} />
                            </td>
                            <td className="table-col-input">
                                <Input type="text" value={this.state.return.trainName} onChange={(e, attr) => this.onReturnChange(e, "trainName")} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >KELAS /<i>Class</i></th>
                            <td className="table-col-input" >
                                <Input type="select" value={this.state.depart.class} onChange={(e, attr) => this.onDepartChange(e, "class")}>
                                    <option>Executive</option>
                                    <option>Bussiness</option>
                                    <option>Economy</option>
                                    <option>Economy with AC</option>
                                </Input>
                            </td>
                            <td className="table-col-input" >
                                <Input type="select" value={this.state.return.class} onChange={(e, attr) => this.onReturnChange(e, "class")}>
                                    <option></option>
                                    <option>Executive</option>
                                    <option>Bussiness</option>
                                    <option>Economy</option>
                                    <option>Economy with AC</option>
                                </Input>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >ASAL /<i>Origin</i></th>
                            <td className="table-col-input" >
                                <Input type="text" value={this.state.depart.origin} onChange={(e, attr) => this.onDepartChange(e, "origin")} />
                            </td>
                            <td className="table-col-input" >
                                <Input type="text" value={this.state.return.origin} onChange={(e, attr) => this.onReturnChange(e, "origin")} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >TUJUAN /<i>Destination</i></th>
                            <td className="table-col-input" >
                                <Input type="text" value={this.state.depart.destination} onChange={(e, attr) => this.onDepartChange(e, "destination")} />
                            </td>
                            <td className="table-col-input" >
                                <Input type="text" value={this.state.return.destination} onChange={(e, attr) => this.onReturnChange(e, "destination")} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >JADWAL BERANGKAT <br /><i>Departure</i></th>
                            <td className="table-col-input" >
                                <Input
                                    type="date"
                                    className="schedule-date"
                                    value={this.state.depart.date}
                                    onChange={(e, attr) => this.onDepartChange(e, "date")}
                                />
                                <Input
                                    type="time"
                                    className="schedule-time"
                                    value={this.state.depart.time}
                                    onChange={(e, attr) => this.onDepartChange(e, "time")}
                                />
                            </td>
                            <td className="table-col-input" >
                                <Input
                                    type="date"
                                    className="schedule-date"
                                    value={this.state.return.date}
                                    onChange={(e, attr) => this.onReturnChange(e, "date")}
                                />
                                <Input
                                    type="time"
                                    className="schedule-time"
                                    value={this.state.return.time}
                                    onChange={(e, attr) => this.onReturnChange(e, "time")}
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Train;