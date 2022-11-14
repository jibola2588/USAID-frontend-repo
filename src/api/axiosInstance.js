import axios from 'axios'

//get token from local storage
let token = localStorage.getItem('token')

const accessToken = token ? JSON.parse(data) : null

console.log(accessToken)


const apiUrl = ''

export const authAxios = axios.create({
baseURL : apiUrl,
headers: { 
    Authorization:`Bearer ${accessToken}`
}
 })


