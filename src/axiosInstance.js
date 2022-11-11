import axios from 'axios'

//get token from local storage
let data = localStorage.getItem('token')

const accessToken = data ? JSON.parse(data) : null

console.log(accessToken)


const apiUrl = ''

export const authAxios = axios.create({
baseURL : apiUrl,
headers: { 
    Authorization:`Bearer ${accessToken}`
}
 })