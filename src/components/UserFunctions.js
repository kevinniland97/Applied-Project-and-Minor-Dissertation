import axios from 'axios';

export const register = newUser => {
    return axios
        .post("/register", {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log("User successfully registered")
        })
}

export const login = user => {
    return axios
        .post("/login", { 
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('User successfully logged in. Token', response.data.token)
            return response.data.token
        })
        .catch(err => {
            console.log(err)
        })
}