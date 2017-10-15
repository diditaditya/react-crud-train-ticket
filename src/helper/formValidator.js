const validator = {
    reserveeCheck: (data) => {
        if (data.name.length > 0 && data.address.length > 0 && data.phone.length > 0) {
            if (/^[0-9]+$/.test(data.phone)) {
                return { status: true }
            }
            return { status: false, error: "Phone may only consist of numbers." }
        }
        return { status: false, error: "Customer name, address, and phone must not be empty." };
    },
    passengersCheck: (data) => {
        let passengers = data.passengers;
        let passengerCount = 0;
        let result = { passenger_1: true, passenger_2: true, passenger_3: true, passenger_4: true};
        passengers.map((passenger, index) => {
            if (passenger.name.length > 0 || passenger.idCardNumber.length > 0 || passenger.type.length > 0) {
                if (passenger.name.length > 0 && passenger.idCardNumber.length > 0 && passenger.type.length > 0) {
                    result[`passenger_${index + 1}`] = true;
                    passengerCount ++;
                } else {
                    result[`passenger_${index + 1}`] = false;
                }
            } else {
                if (index === 0) {
                    result[`passenger_${index + 1}`] = false;
                } else {
                    result[`passenger_${index + 1}`] = true;
                }
            }
            return null;
        });
        if (result.passenger_1) {
            for (let i = 2; i <= 4; i++) {
                if (!result[`passenger_${i}`]) {
                    return { status: false, error: `Passenger ${i} data is incomplete` };
                }
            }
            return { status: true, passengers: passengerCount };
        } else {
            return { status: false, error: "Passenger 1 data may not be empty" };
        }
    },
    trainCheck: (data) => {
        let isFilled = (data.trainName.length > 0 || data.class.length > 0 || data.origin.length > 0 || data.destination.length > 0 || data.date.length > 0 || data.time.length > 0);
        let isComplete = (data.trainName.length > 0 && data.class.length > 0 && data.origin.length > 0 && data.destination.length > 0 && data.date.length > 0 && data.time.length > 0);
        if (isFilled) {
            if (isComplete) {
                return {status: true};
            }
            return {status: false, error: "Booking detail is incomplete"};
        }
        return { status: true };
    }
}

export default validator;