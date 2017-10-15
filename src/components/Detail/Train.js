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
                <h5 className="form-section-title" >Booking Details</h5>
                <Table bordered>
                    <thead>
                        <tr>
                            <th ></th>
                            <th>Depart Train</th>
                            <th>Return Train</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="table-col-label" >Train Name</th>
                            <td className="table-col-input" >
                                {this.props.depart.trainName}
                            </td>
                            <td className="table-col-input">
                                {this.props.return.trainName}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >Train Class</th>
                            <td className="table-col-input" >
                                {this.props.depart.class}
                            </td>
                            <td className="table-col-input" >
                                {this.props.return.class}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >Origin</th>
                            <td className="table-col-input" >
                                {this.props.depart.origin}
                            </td>
                            <td className="table-col-input" >
                                {this.props.return.origin}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >Destination</th>
                            <td className="table-col-input" >
                                {this.props.depart.destination}
                            </td>
                            <td className="table-col-input" >
                                {this.props.return.destination}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >Schedule</th>
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