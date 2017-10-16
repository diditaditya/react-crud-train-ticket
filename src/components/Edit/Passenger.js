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
                <h5 className="form-section-title" >DATA PENUMPANG/<i>Passenger Details</i></h5>
                <Table bordered className="table-no-bottom-gap" >
                    <thead>
                        <tr>
                            <th ></th>
                            <th>PENUMPANG 1 /<i>Passenger 1</i></th>
                            <th>PENUMPANG 2 /<i>Passenger 2</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="table-col-label" >NAMA /<i>Name</i></th>
                            <td><Input type="text" value={this.state.passengers[0].name} onChange={(e, idx) => this.onNameChange(e, 0)} /></td>
                            <td><Input type="text" value={this.state.passengers[1].name} onChange={(e, idx) => this.onNameChange(e, 1)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >NO IDENTITAS /<i>ID</i></th>
                            <td><Input type="text" value={this.state.passengers[0].idCardNumber} onChange={(e, idx) => this.onIdChange(e, 0)} /></td>
                            <td><Input type="text" value={this.state.passengers[1].idCardNumber} onChange={(e, idx) => this.onIdChange(e, 1)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >TIPE PNP /<i>Type</i></th>
                            <td>
                                <Input type="select" value={this.state.passengers[0].type} onChange={(e, idx) => this.onTypeChange(e, 0)} >
                                    <option>DEWASA (Adult)</option>
                                    <option>DEWASA (Infant) non seat</option>
                                </Input>
                            </td>
                            <td>
                                <Input type="select" value={this.state.passengers[1].type} onChange={(e, idx) => this.onTypeChange(e, 1)}>
                                    <option></option>
                                    <option>DEWASA (Adult)</option>
                                    <option>DEWASA (Infant) non seat</option>
                                </Input>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Table bordered className="table-no-bottom-gap" >
                    <thead>
                        <tr>
                            <th ></th>
                            <th>PENUMPANG 3 /<i>Passenger 3</i></th>
                            <th>PENUMPANG 4 /<i>Passenger 4</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="table-col-label" >NAMA /<i>Name</i></th>
                            <td><Input type="text" value={this.state.passengers[2].name} onChange={(e, idx) => this.onNameChange(e, 2)} /></td>
                            <td><Input type="text" value={this.state.passengers[3].name} onChange={(e, idx) => this.onNameChange(e, 3)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >NO IDENTITAS /<i>ID</i></th>
                            <td><Input type="text" value={this.state.passengers[2].idCardNumber} onChange={(e, idx) => this.onIdChange(e, 2)} /></td>
                            <td><Input type="text" value={this.state.passengers[3].idCardNumber} onChange={(e, idx) => this.onIdChange(e, 3)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >TIPE PNP /<i>Type</i></th>
                            <td>
                                <Input type="select" value={this.state.passengers[2].type} onChange={(e, idx) => this.onTypeChange(e, 2)}>
                                    <option></option>
                                    <option>DEWASA (Adult)</option>
                                    <option>DEWASA (Infant) non seat</option>
                                </Input>
                            </td>
                            <td>
                                <Input type="select" value={this.state.passengers[3].type} onChange={(e, idx) => this.onTypeChange(e, 3)}>
                                    <option></option>
                                    <option>DEWASA (Adult)</option>
                                    <option>DEWASA (Infant) non seat</option>
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