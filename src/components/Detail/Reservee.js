import React, { Component } from 'react';
import { Table } from 'reactstrap';

import '../../style/styles.css'

class Reservee extends Component {
    render() {
        return (
            <div>
                <h5 className="form-section-title" >Customer/Reservee Detail</h5>
                <Table bordered className="table-no-bottom-gap" >
                    <tbody>
                        <tr>
                            <th scope="row" className="table-col-label" >Name</th>
                            <td>{this.props.reservee.name}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >Address</th>
                            <td>{this.props.reservee.address}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >Phone</th>
                            <td>{this.props.reservee.phone}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Reservee;