import { io } from 'socket.io-client'

let socket

export const initiateSocketConnection = (WS_URL) => {
  socket = io(WS_URL)
}

export const deviceInfo = (setWsStatus) => {
  socket.on('connect', () => {
    setWsStatus(true)
    socket.emit('storeDeviceInfo', { customId: 'remote' })
  })
}

export const getScreenStatus = (setScreenStatus) => {
  socket.on('connectionStatus', ({ status }) => {
    setScreenStatus(status)
  })
}

export const disconnectSocket = () => {
  if (socket) socket.disconnect()
}

export const disconnectErr = (setWsStatus, setScreenStatus) => {
  socket.on('disconnect', () => {
    setWsStatus(false)
    setScreenStatus(false)
  })
}

export const pairingConnect = (pairingCode) => {
  if (pairingCode === null) {
    return false
  }
  return new Promise((resolve, reject) => {
    socket.emit('pairing', { pairingCodeReceive: pairingCode }, (response) => {
      if (response.result) {
        resolve(response.result)
      } else {
        reject(response.result)
      }
    })
  })
}

export const emitInfo = () => {
  console.log('Emission')
  socket.emit('screen', { msg: 'Hello' })
}

export const emitPlayersList = (list) => {
  console.log('Emission playersList')
  socket.emit('remote', list)
}

export const emitPlayersListByTeam = (team1) => {
  console.log('Emission playersListByTeam')
  socket.emit('remote', team1)
}

export const timer = (time) => {
  console.log('time:')
  console.log(time)

  socket.emit('timer', time)
  console.log('testtt')
}
