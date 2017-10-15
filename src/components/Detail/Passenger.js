import React, { Component } from 'react';
import { Table } from 'reactstrap';

import '../../style/styles.css'

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
                            <th scope="row" className="table-col-label" >Name</th>
                            <td>{this.props.passengers[0].name}</td>
                            <td>{this.props.passengers[1].name}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >ID Card No.</th>
                            <td>{this.props.passengers[0].idCardNumber}</td>
                            <td>{this.props.passengers[1].idCardNumber}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >Type</th>
                            <td>{this.props.passengers[0].type}</td>
                            <td>{this.props.passengers[1].type}</td>
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
                            <th scope="row" className="table-col-label" >Name</th>
                            <td>{this.props.passengers[2].name}</td>
                            <td>{this.props.passengers[3].name}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >ID Card No.</th>
                            <td>{this.props.passengers[2].idCardNumber}</td>
                            <td>{this.props.passengers[3].idCardNumber}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >Type</th>
                            <td>{this.props.passengers[2].type}</td>
                            <td>{this.props.passengers[3].type}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Passenger;