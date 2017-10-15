import React, { Component } from 'react';
import {
    Table,
    Input
} from 'reactstrap';

import '../../style/styles.css'

class Reservee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.reservee.name,
            address: this.props.reservee.address,
            phone: this.props.reservee.phone,
        };
    }

    onNameChange(event) {
        this.setState({
            name: event.target.value,
        }, () => {
            this.props.onNameChange(this.state.name);
        });
    }

    onAddressChange(event) {
        this.setState({
            address: event.target.value,
        }, () => {
            this.props.onAddressChange(this.state.address);
        });
    }

    onPhoneChange(event) {
        this.setState({
            phone: event.target.value,
        }, () => {
            this.props.onPhoneChange(this.state.phone);
        });
    }

    render() {
        return (
            <div>
                <h5 className="form-section-title" >Customer/Reservee Detail</h5>
                <Table bordered className="table-no-bottom-gap" >
                    <tbody>
                        <tr>
                            <th scope="row" className="table-col-label" >Name</th>
                            <td>
                                <Input type="text" value={this.state.name} onChange={(e) => this.onNameChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >Address</th>
                            <td>
                                <Input type="text" value={this.state.address} onChange={(e) => this.onAddressChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >Phone</th>
                            <td>
                                <Input type="text" value={this.state.phone} onChange={(e) => this.onPhoneChange(e)} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Reservee;