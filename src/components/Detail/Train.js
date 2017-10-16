import React, { Component } from 'react';
import {
    Input,
    Table
} from 'reactstrap';

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
                            <th>PERGI/<i>Depart</i></th>
                            <th>PULANG/<i>Return</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="table-col-label" >NAMA KERETA API <br /> <i>Train Name</i></th>
                            <td className="table-col-input" >
                                {this.props.depart.trainName}
                            </td>
                            <td className="table-col-input">
                                {this.props.return.trainName}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >KELAS /<i>Class</i></th>
                            <td className="table-col-input" >
                                {this.props.depart.class}
                            </td>
                            <td className="table-col-input" >
                                {this.props.return.class}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >ASAL/<i>Origin</i></th>
                            <td className="table-col-input" >
                                {this.props.depart.origin}
                            </td>
                            <td className="table-col-input" >
                                {this.props.return.origin}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >TUJUAN /<i>Destination</i></th>
                            <td className="table-col-input" >
                                {this.props.depart.destination}
                            </td>
                            <td className="table-col-input" >
                                {this.props.return.destination}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >JADWAL BERANGKAT <br /><i>Departure</i></th>
                            <td className="table-col-input" >
                                {this.props.depart.date}   {this.props.depart.time}
                            </td>
                            <td className="table-col-input" >
                                {this.props.return.date} {this.props.return.time}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Train;