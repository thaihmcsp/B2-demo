export function signUp (username, password){
    return {
        type: 'user/signUp',
        payload: {username, password}
    }
}

export function changePass (index, password){
    return {
        type: 'user/changePass',
        payload: {index, password}
    }
}

