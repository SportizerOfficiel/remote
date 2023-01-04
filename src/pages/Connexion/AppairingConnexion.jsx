import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { useAuth } from '../../contexts/auth'

import { pairingConnect } from '../../services/webSocket'
import { iAmPaired } from '../../utils/appAuth'

const Connexion = () => {
  const { setPairingConnect } = useAuth()

  const [pairingCode, setPairingCode] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let paired = iAmPaired()
    setPairingConnect(paired)

    return () => (paired = false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
    pairingConnect(pairingCode)
      .then((res) => {
        sessionStorage.setItem('PairingCode', pairingCode)
        setPairingConnect(res)
        setLoading(false)
      })
      .catch(() => {
        setMessage('Mauvais code')
        setPairingCode('')
        setLoading(false)
      })
  }
  return (
    <div className="w-screen h-screen bg-secondary-color p-2 text-white-color text-xl">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="flex flex-col">
            <div className="mb-14 text-3xl font-righteous text-primary-color">
              Appairage écran
            </div>
            <label htmlFor="pairingCode" className="mb-1 text-left">
              Code d&apos;appairage
            </label>
            <input
              type="text"
              name="pairingCode"
              id="pairingCode"
              value={pairingCode}
              onChange={(e) => setPairingCode(e.target.value.toUpperCase())}
              required
              className="border-2 mb-8 focus:outline-none rounded-xl p-1 justify-end bg-white-color border-primary-color text-secondary-color"
            />
            <div>
              <div className="text-red-color mb-4">{message}</div>
              <button
                onClick={handleSubmit}
                className="rounded-xl text-2xl bg-primary-color text-white font-bold py-4 px-8"
              >
                {loading ? (
                  <ReactLoading
                    type="spin"
                    color="white"
                    height={27}
                    width={27}
                  />
                ) : (
                  'Relier'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connexion
