import React, { useEffect } from 'react'

import {
  deviceInfo,
  disconnectErr,
  disconnectSocket,
  emitInfo,
  getScreenStatus,
  initiateSocketConnection,
} from '../../services/webSocket'

import { useAuth } from '../../contexts/auth'

import Dashboard from './Dashboard'
import AppairingConnexion from '../Connexion/AppairingConnexion'

const Sportizer = () => {
  const { pairingConnect, setWsStatus, setScreenStatus } = useAuth()

  useEffect(() => {
    initiateSocketConnection(__SNOWPACK_ENV__.SNOWPACK_PUBLIC_WS_URL)
    deviceInfo(setWsStatus)
    disconnectErr(setWsStatus, setScreenStatus)
    emitInfo()
    getScreenStatus(setScreenStatus)
    // timerstart()

    return () => {
      disconnectSocket()
    }
  }, [])

  return pairingConnect ? <Dashboard /> : <AppairingConnexion />
}

export default Sportizer
