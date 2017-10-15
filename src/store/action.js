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
    },
    delete: (id) => {
        return {
            type: "DELETE",
            payload: id,
        }
    }
}

export default action;