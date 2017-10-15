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
                <h5>Customer/Reservee Detail</h5>

                <Table>
                    <tbody>
                        <tr>
                            <th scope="row" className="table-col-label" >Name</th>
                            <td>
                                <Input type="text" value={this.state.name} onChange={(e)=>this.props.onNameChange(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >Address</th>
                            <td>
                                <Input type="text" value={this.state.address} onChange={(e) => this.props.onAddressChange(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >Phone</th>
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