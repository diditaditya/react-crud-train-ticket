import React, { Component } from 'react';
import {
    Table,
    Input } from 'reactstrap';

import '../../style/styles.css'

class Reservee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.values.name,
            address: this.props.values.address,
            phone: this.props.values.phone,
        };
    }

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
                            <td>
                                <Input type="text" value={this.state.name} onChange={(e)=>this.props.onNameChange(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >ALAMAT /<i>Address</i></th>
                            <td>
                                <Input type="text" value={this.state.address} onChange={(e) => this.props.onAddressChange(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >TELEPON /<i>Telephone</i></th>
                            <td>
                                <Input type="text" value={this.state.phone} onChange={(e) => this.props.onPhoneChange(e.target.value)}/>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Reservee;