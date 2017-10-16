import React, { Component } from 'react';
import {
    Input,
    Table } from 'reactstrap';

import '../../style/styles.css';

class Train extends Component {
    render() {
        return (
            <div>
                <h5 className="form-section-title" >DATA PERJALANAN / <i>Booking Details</i></h5>
                <Table bordered>
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
                                <Input type="text" onChange={(e, attr) => this.props.onDepartChange(e.target.value, "trainName")} />
                            </td>
                            <td className="table-col-input">
                                <Input type="text" onChange={(e, attr) => this.props.onReturnChange(e.target.value, "trainName")}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >KELAS /<i>Class</i></th>
                            <td className="table-col-input" >
                                <Input type="select" onChange={(e, attr) => this.props.onDepartChange(e.target.value, "class")}>
                                    <option>Executive</option>
                                    <option>Bussiness</option>
                                    <option>Economy</option>
                                    <option>Economy with AC</option>
                                </Input>
                            </td>
                            <td className="table-col-input" >
                                <Input type="select" onChange={(e, attr) => this.props.onReturnChange(e.target.value, "class")}>
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
                                <Input type="text" onChange={(e, attr) => this.props.onDepartChange(e.target.value, "origin")} />
                            </td>
                            <td className="table-col-input" >
                                <Input type="text" onChange={(e, attr) => this.props.onReturnChange(e.target.value, "origin")} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >TUJUAN /<i>Destination</i></th>
                            <td className="table-col-input" >
                                <Input type="text" onChange={(e, attr) => this.props.onDepartChange(e.target.value, "destination")} />
                            </td>
                            <td className="table-col-input" >
                                <Input type="text" onChange={(e, attr) => this.props.onReturnChange(e.target.value, "destination")} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >JADWAL BERANGKAT <br/><i>Departure</i></th>
                            <td className="table-col-input" >
                                <Input 
                                    type="date" 
                                    className="schedule-date" 
                                    onChange={(e, attr) => this.props.onDepartChange(e.target.value, "date")} 
                                />
                                <Input 
                                    type="time" 
                                    className="schedule-time" 
                                    onChange={(e, attr) => this.props.onDepartChange(e.target.value, "time")} 
                                />
                            </td>
                            <td className="table-col-input" >
                                <Input 
                                    type="date" 
                                    className="schedule-date"
                                    onChange={(e, attr) => this.props.onReturnChange(e.target.value, "date")} 
                                />
                                <Input 
                                    type="time" 
                                    className="schedule-time"
                                    onChange={(e, attr) => this.props.onReturnChange(e.target.value, "time")} 
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