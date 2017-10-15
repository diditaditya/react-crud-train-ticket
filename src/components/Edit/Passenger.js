import React, { Component } from 'react';
import {
    Table,
    Input
} from 'reactstrap';

import '../../style/styles.css';

class Passenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passengers: this.props.passengers
        };
    }

    onNameChange(event, index) {
        let passengers = this.state.passengers;
        passengers[index].name = event.target.value;
        this.setState({
            passengers: passengers,
        }, () => {
            this.props.onNameChange(this.state.passengers[index].name, index)
        });
    }

    onIdChange(event, index) {
        let passengers = this.state.passengers;
        passengers[index].idCardNumber = event.target.value;
        this.setState({
            passengers: passengers,
        }, () => {
            this.props.onIdChange(this.state.passengers[index].idCardNumber, index)
        });
    }

    onTypeChange(event, index) {
        let passengers = this.state.passengers;
        passengers[index].type = event.target.value;
        this.setState({
            passengers: passengers,
        }, () => {
            this.props.onTypeChange(this.state.passengers[index].type, index)
        });
    }

    render() {
        return (
            <div>
                <h5 className="form-section-title" >Passenger Details</h5>
                <Table bordered className="table-no-bottom-gap" >
                    <thead>
                        <tr>
                            <th ></th>
                            <th>Passenger 1</th>
                            <th>Passenger 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" >Name</th>
                            <td><Input type="text" value={this.state.passengers[0].name} onChange={(e, idx) => this.onNameChange(e, 0)} /></td>
                            <td><Input type="text" value={this.state.passengers[1].name} onChange={(e, idx) => this.onNameChange(e, 1)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" >ID Card No.</th>
                            <td><Input type="text" value={this.state.passengers[0].idCardNumber} onChange={(e, idx) => this.onIdChange(e, 0)} /></td>
                            <td><Input type="text" value={this.state.passengers[1].idCardNumber} onChange={(e, idx) => this.onIdChange(e, 1)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" >Type</th>
                            <td>
                                <Input type="select" value={this.state.passengers[0].type} onChange={(e, idx) => this.onTypeChange(e, 0)} >
                                    <option>Adult</option>
                                    <option>Infant</option>
                                </Input>
                            </td>
                            <td>
                                <Input type="select" value={this.state.passengers[1].type} onChange={(e, idx) => this.onTypeChange(e, 1)}>
                                    <option></option>
                                    <option>Adult</option>
                                    <option>Infant</option>
                                </Input>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Table bordered className="table-no-bottom-gap" >
                    <thead>
                        <tr>
                            <th ></th>
                            <th>Passenger 3</th>
                            <th>Passenger 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" >Name</th>
                            <td><Input type="text" value={this.state.passengers[2].name} onChange={(e, idx) => this.onNameChange(e, 2)} /></td>
                            <td><Input type="text" value={this.state.passengers[3].name} onChange={(e, idx) => this.onNameChange(e, 3)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" >ID Card No.</th>
                            <td><Input type="text" value={this.state.passengers[2].idCardNumber} onChange={(e, idx) => this.onIdChange(e, 2)} /></td>
                            <td><Input type="text" value={this.state.passengers[3].idCardNumber} onChange={(e, idx) => this.onIdChange(e, 3)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" >Type</th>
                            <td>
                                <Input type="select" value={this.state.passengers[2].type} onChange={(e, idx) => this.onTypeChange(e, 2)}>
                                    <option></option>
                                    <option>Adult</option>
                                    <option>Infant</option>
                                </Input>
                            </td>
                            <td>
                                <Input type="select" value={this.state.passengers[3].type} onChange={(e, idx) => this.onTypeChange(e, 3)}>
                                    <option></option>
                                    <option>Adult</option>
                                    <option>Infant</option>
                                </Input>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Passenger;