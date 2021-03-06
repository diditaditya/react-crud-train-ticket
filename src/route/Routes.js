import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BookingList from '../components/BookingList';
import BookingDetail from '../components/BookingDetail';
import AddBooking from '../components/AddNewBooking';
import EditBooking from '../components/EditBooking';

const AppRoute = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={BookingList} />
                <Route path="/add" component={AddBooking} />
                <Route exact path="/:bookingId" component={BookingDetail} />
                <Route path="/:bookingId/edit" component={EditBooking} />
            </Switch>
        </main>
    )
}

export default AppRoute;