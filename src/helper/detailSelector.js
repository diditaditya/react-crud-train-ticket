const detailSelector = (list, id) => {
    let detailIndex = null;
    list.map((booking, index) => {
        if (String(id) === String(booking.id)) {
            detailIndex = index; 
        }
        return null;
    });
    if (detailIndex !== null) {
        return list[detailIndex];
    } else {
        return null;
    }
}

export default detailSelector;