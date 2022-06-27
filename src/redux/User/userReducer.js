let initUser = [
    {username: 'thai', password:'thai'},
    {username: 'tung', password:'tung'},
]

export function userReducer (state = initUser, action){
    switch (action.type) {
        case 'user/signUp':
            return [...state, action.payload]

        case 'user/changePass':
            const cloneUser = [...state]     
            cloneUser[action.payload.index].password = action.payload.password
            return cloneUser

        default:
            return state;       
    }
}