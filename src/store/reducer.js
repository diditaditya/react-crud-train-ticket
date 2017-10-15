const initialState = {
    reservations: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                reservations: [...state.reservations, action.payload],
            }
        case "UPDATE":
            let index = null;
            state.reservations.map((reservation, idx) => {
                if (String(reservation.id) === String(action.payload.id)) {
                    index = idx;
                }
                return idx;
            });
            return {
                ...state,
                reservations: [
                    ...state.reservations.slice(0, index),
                    action.payload,
                    ...state.reservations.slice(index + 1)
                ]
            }
        default:
            break;
    }
    return state;
}

export default reducer;