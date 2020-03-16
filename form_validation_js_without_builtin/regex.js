
const regex = {
    textOnly : /^[A-Za-z]+$/,
    email : /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
    numberOnly : /^[0-9]+$/,
    password : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
}