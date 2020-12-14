
export function setPersons(payload) {
    return {
        type: 'PERSONS',
        payload
    }
}

export function setPerson(payload) {
    return {
        type: 'PERSON',
        payload
    }
}