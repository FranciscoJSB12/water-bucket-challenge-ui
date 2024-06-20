import axios from "axios"

export const bucketChallengApi = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
      'Content-Type': 'application/json',
    }
});