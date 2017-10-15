import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import '../../style/styles.css';

const List = (props) => {
    if (props.list.length > 0) {
        return (
            <tbody>
                {
                    props.list.map((booking, index) => {
                        let url = `/${booking.id}`;
                        return (
                            <tr key={booking.id} >
                                <td>{index + 1}</td>
                                <td>{booking.id}</td>
                                <td>{booking.name}</td>
                                <td>{booking.totalPassengers}</td>
                                <td>{booking.depart.origin}</td>
                                <td>{booking.depart.destination}</td>
                                <td>
                                    <Link to={url}>
                                        <Button>Show Detail</Button>
                                    </Link>
                                </td>
                                <td>
                                    <Button color="danger">Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        );
    } else {
        return (
            <tbody>
                <tr>
                    <td colSpan="6">No Reservation Found</td>
                </tr>
            </tbody>
        );
    }
}

export default List;