import axios from "axios";

const links = [
  'http://localhost:5000',
  'https://reqres.in/api/'
]

const http = axios.create({
  baseURL: `${links[0]}`
})

export default http;