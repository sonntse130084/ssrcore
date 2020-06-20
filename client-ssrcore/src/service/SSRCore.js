import axios from 'axios'
// https://webapi20200601090708.azurewebsites.net/api/v1/Auth/Auth
// const API_URL = 'https://webapi20200601090708.azurewebsites.net'
const API_URL = 'https://localhost:44312'
class SSRCore {
  get (url, obj) {
    return axios
      .get(API_URL + url, obj)
      .then(response => {
        return response
      }).catch(error => {
        alert(error)
        console.log(error)
      })
  }

  post (url, obj) {
    return axios
      .post(API_URL + url, obj)
      .then(response => {
        return response
      }).catch(error => {
        alert(error)
        console.log(error)
      })
  }

  put (url, obj) {
    return axios
      .put(API_URL + url, obj)
      .then(response => {
        return response
      }).catch(error => {
        alert(error)
        console.log(error)
      })
  }

  delete (url, obj) {
    return axios
      .delete(API_URL + url, obj)
      .then(response => {
        return response
      }).catch(error => {
        alert(error)
        console.log(error)
      })
  }
}

export default new SSRCore()