import React, { Component } from 'react';
import { Table } from 'reactstrap';

import '../../style/styles.css'

class Reservee extends Component {
    render() {
        return (
            <div>
                <h5 className="form-section-title" >
                    DATA PEMESAN / <i>Customer(Reservee) Detail</i>
                </h5>
                <Table bordered className="table-no-bottom-gap" >
                    <tbody>
                        <tr>
                            <th scope="row" className="table-col-label" >NAMA /<i>Name</i></th>
                            <td>{this.props.reservee.name}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >ALAMAT /<i>Address</i></th>
                            <td>{this.props.reservee.address}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >TELEPON /<i>Telephone</i></th>
                            <td>{this.props.reservee.phone}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Reservee;