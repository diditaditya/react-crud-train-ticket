import React, { Component } from 'react';
import { Table } from 'reactstrap';

import '../../style/styles.css'

class Passenger extends Component {
    render() {
        return (
            <div>
                <h5 className="form-section-title" >DATA PENUMPANG / <i>Passenger Details</i></h5>
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
                            <td>{this.props.passengers[0].name}</td>
                            <td>{this.props.passengers[1].name}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >NO IDENTITAS /<i>ID</i></th>
                            <td>{this.props.passengers[0].idCardNumber}</td>
                            <td>{this.props.passengers[1].idCardNumber}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >TIPE PNP /<i>Type</i></th>
                            <td>{this.props.passengers[0].type}</td>
                            <td>{this.props.passengers[1].type}</td>
                        </tr>
                    </tbody>
                </Table>
                <Table bordered className="table-no-bottom-gap" >
                    <thead>
                        <tr>
                            <th ></th>
                            <th>PENUMPANG 3/<i>Passenger 3</i></th>
                            <th>PENUMPANG 4/<i>Passenger 4</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="table-col-label" >NAMA /<i>Name</i></th>
                            <td>{this.props.passengers[2].name}</td>
                            <td>{this.props.passengers[3].name}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >NO IDENTITAS /<i>ID</i></th>
                            <td>{this.props.passengers[2].idCardNumber}</td>
                            <td>{this.props.passengers[3].idCardNumber}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-col-label" >TIPE PNP /<i>Type</i></th>
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