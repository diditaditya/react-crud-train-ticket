import React, { Component } from 'react';
import {
    Table,
    Input } from 'reactstrap';

import '../../style/styles.css';

class Passenger extends Component {
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
                            <td><Input type="text" onChange={(e, idx) => this.props.onNameChange(e.target.value, 0)} /></td>
                            <td><Input type="text" onChange={(e, idx) => this.props.onNameChange(e.target.value, 1)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" >ID Card No.</th>
                            <td><Input type="text" onChange={(e, idx) => this.props.onIdChange(e.target.value, 0)} /></td>
                            <td><Input type="text" onChange={(e, idx) => this.props.onIdChange(e.target.value, 1)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" >Type</th>
                            <td>
                                <Input type="select" onChange={(e, idx) => this.props.onTypeChange(e.target.value, 0)} >
                                    <option>Adult</option>
                                    <option>Infant</option>
                                </Input>
                            </td>
                            <td>
                                <Input type="select" onChange={(e, idx) => this.props.onTypeChange(e.target.value, 1)}>
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
                            <td><Input type="text" onChange={(e, idx) => this.props.onNameChange(e.target.value, 2)} /></td>
                            <td><Input type="text" onChange={(e, idx) => this.props.onNameChange(e.target.value, 3)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" >ID Card No.</th>
                            <td><Input type="text" onChange={(e, idx) => this.props.onIdChange(e.target.value, 2)} /></td>
                            <td><Input type="text" onChange={(e, idx) => this.props.onIdChange(e.target.value, 3)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" >Type</th>
                            <td>
                                <Input type="select" onChange={(e, idx) => this.props.onTypeChange(e.target.value, 2)}>
                                    <option></option>
                                    <option>Adult</option>
                                    <option>Infant</option>
                                </Input>
                            </td>
                            <td>
                                <Input type="select" onChange={(e, idx) => this.props.onTypeChange(e.target.value, 3)}>
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