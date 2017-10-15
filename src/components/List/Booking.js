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
                                        <Button size="sm" >Detail</Button>
                                    </Link>
                                    <Button
                                        size="sm" 
                                        color="danger" 
                                        onClick={(id) => {
                                            props.toggle();
                                            props.setToBeDeletedId(booking.id);
                                            }
                                        }
                                    >
                                        Delete
                                    </Button>
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
                    <td colSpan="7" className="empty-list-message" >
                        No Reservation Found
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default List;