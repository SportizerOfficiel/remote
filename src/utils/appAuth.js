import jwtDecode from 'jwt-decode'
import { pairingConnect } from '../services/webSocket'

export const loginMe = (token, setSportizerConnect, setMairieName) => {
  localStorage.setItem('Auth Token', token)
  let { email, connected } = jwtDecode(token)
  setSportizerConnect(connected)
  setMairieName(email)
}

export const logoutMe = (
  setSportizerConnect,
  setPairingConnect,
  setMairieName
) => {
  setMairieName('')
  setSportizerConnect(false)
  setPairingConnect(false)
  localStorage.removeItem('Auth Token')
  sessionStorage.removeItem('PairingCode')
  return 'done'
}

export const iAmAuth = (setSportizerConnect, setMairieName) => {
  if (localStorage.getItem('Auth Token')) {
    let { email, connected } = jwtDecode(localStorage.getItem('Auth Token'))
    setMairieName(email)
    setSportizerConnect(connected)
    return true
  } else {
    setSportizerConnect(false)
    return false
  }
}

export const iAmPaired = () => {
  pairingConnect(sessionStorage.getItem('PairingCode'))
}
