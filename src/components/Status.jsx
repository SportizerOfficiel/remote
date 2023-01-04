import React from 'react'
import { useAuth } from '../contexts/auth'

const Status = () => {
  const { wsStatus, screenStatus } = useAuth()

  return (
    <div className="flex border rounded p-4 mx-2 bg-white bg-opacity-10">
      <div className="px-2">
        Serveur :
        {wsStatus ? (
          <span className="text-green-300"> ON</span>
        ) : (
          <span className="text-red-300"> OFF</span>
        )}
      </div>
      <div className="px-2">
        Ecran :
        {screenStatus ? (
          <span className="text-green-300"> ON</span>
        ) : (
          <span className="text-red-300"> OFF</span>
        )}
      </div>

      
    </div>
  )
}

export default Status
