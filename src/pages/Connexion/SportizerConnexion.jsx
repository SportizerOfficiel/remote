import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { useAuth } from '../../contexts/auth'
import { iAmAuth, loginMe } from '../../utils/appAuth'

const SportizerConnexion = () => {
  const { setSportizerConnect, setMairieName } = useAuth()

  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  useEffect(() => {
    iAmAuth(setSportizerConnect, setMairieName)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)
    const loggin = { email: email, password: password }

    await axios
      .post(__SNOWPACK_ENV__.SNOWPACK_PUBLIC_SIGNIN_URL, loggin)
      .then((res) => {
        setMessage('')
        setIsLoading(false)

        loginMe(res.data.token, setSportizerConnect, setMairieName)
        history.push('/app')
      })
      .catch((err) => {
        setIsLoading(false)
        setPassword('')
        setMessage('Mauvais email ou mot de passe')
        console.log(err)
      })
  }
  return (
    <div className="w-screen h-screen bg-secondary-color p-2 text-secondary-color text-xl">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-center w-80">
          <div className="mb-8 text-3xl font-righteous text-primary-color">
            Identifez-vous
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="email" className="mb-1 text-left text-white-color">
              Email
            </label>
            <input
              type="email"
              placeholder="paris@sportizer.fr"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 mb-10 focus:outline-none rounded-xl p-1 justify-end bg-white-color border-primary-color"
            />
            <label
              htmlFor="password"
              className="mb-1 text-left text-white-color"
            >
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="**********"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 mb-10 focus:outline-none rounded-xl p-1 justify-end bg-white-color border-primary-color"
            />
            <div>
              <button
                type="submit"
                className="rounded-xl text-2xl bg-primary-color text-white font-bold py-4 px-8"
              >
                {isLoading ? (
                  <ReactLoading
                    type="spin"
                    color="white"
                    height={27}
                    width={27}
                  />
                ) : (
                  "S'identifier"
                )}
              </button>
            </div>
          </form>
          {message && <div className="py-4">{message}</div>}
        </div>
      </div>
    </div>
  )
}

export default SportizerConnexion
