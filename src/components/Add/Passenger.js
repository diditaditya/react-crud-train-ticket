import React, { Component } from 'react';
import {
    Table,
    Input } from 'reactstrap';

import '../../style/styles.css';

class Passenger extends Component {
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
                            <td><Input type="text" onChange={(e, idx) => this.props.onNameChange(e.target.value, 0)} /></td>
                            <td><Input type="text" onChange={(e, idx) => this.props.onNameChange(e.target.value, 1)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >NO IDENTITAS /<i>ID</i></th>
                            <td><Input type="text" onChange={(e, idx) => this.props.onIdChange(e.target.value, 0)} /></td>
                            <td><Input type="text" onChange={(e, idx) => this.props.onIdChange(e.target.value, 1)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >TIPE PNP /<i>Type</i></th>
                            <td>
                                <Input type="select" onChange={(e, idx) => this.props.onTypeChange(e.target.value, 0)} >
                                    <option>DEWASA (Adult)</option>
                                    <option>BAYI (Infant) non seat</option>
                                </Input>
                            </td>
                            <td>
                                <Input type="select" onChange={(e, idx) => this.props.onTypeChange(e.target.value, 1)}>
                                    <option></option>
                                    <option>DEWASA (Adult)</option>
                                    <option>BAYI (Infant) non seat</option>
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
                            <td><Input type="text" onChange={(e, idx) => this.props.onNameChange(e.target.value, 2)} /></td>
                            <td><Input type="text" onChange={(e, idx) => this.props.onNameChange(e.target.value, 3)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >NO IDENTITAS /<i>ID</i></th>
                            <td><Input type="text" onChange={(e, idx) => this.props.onIdChange(e.target.value, 2)} /></td>
                            <td><Input type="text" onChange={(e, idx) => this.props.onIdChange(e.target.value, 3)} /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >TIPE PNP /<i>Type</i></th>
                            <td>
                                <Input type="select" onChange={(e, idx) => this.props.onTypeChange(e.target.value, 2)}>
                                    <option></option>
                                    <option>DEWASA (Adult)</option>
                                    <option>BAYI (Infant) non seat</option>
                                </Input>
                            </td>
                            <td>
                                <Input type="select" onChange={(e, idx) => this.props.onTypeChange(e.target.value, 3)}>
                                    <option></option>
                                    <option>DEWASA (Adult)</option>
                                    <option>BAYI (Infant) non seat</option>
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