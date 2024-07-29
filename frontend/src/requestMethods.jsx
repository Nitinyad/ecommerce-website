import axios from 'axios'


const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTcxYWU5MGEzMGYwMmE2NmI5YjVkOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjk4NDYzNiwiZXhwIjoxNzE5NTc2NjM2fQ.IgMjDC-nV8d2hOyTmi6Vjg1dZV5ZLtXFU-flfH4t1LY"

export const publicRequest = axios.create({
    baseURL : BASE_URL
})

export const userRequest = axios.create({
    baseURL : BASE_URL ,
    header : {token : `Bearer ${TOKEN}`},
})
