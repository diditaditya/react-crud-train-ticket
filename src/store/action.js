const action = {
    add: (item) => {
        return {
            type: "ADD",
            payload: item,
        }
    },
    update: (item) => {
        return {
            type: "UPDATE",
            payload: item,
        }
    }
}

export default action;