import axios from 'axios'

export const login = ( code ) => {
  return axios
    .post( "http://localhost:3001/login", {
      code,
    } )

}