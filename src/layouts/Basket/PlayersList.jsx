import React, { useState, useEffect } from 'react'
import PropType from 'prop-types'
import axios from 'axios'

import { emitPlayersList } from '../../services/webSocket'

const PlayersList = ({ setIsPlayersListSended }) => {
  const [clubs, setClubs] = useState()
  const [idTeam1, setIdTeam1] = useState('')
  const [idTeam2, setIdTeam2] = useState('')
  const [playersTeam1, setPlayersTeam1] = useState()
  const [playersTeam2, setPlayersTeam2] = useState()

  useEffect(() => {
    axios.get('http://localhost:8080/api/clubs').then((response) => {
      console.log(response.data)
      setClubs(response.data)
    })
  }, [])

  const teamButtonSubmit = (e) => {
    e.preventDefault()
    console.log('You cliked submit')

    const result = clubs.filter((obj) => {
      return obj.id === idTeam1
    })

    const result1 = clubs.filter((obj) => {
      return obj.id === idTeam2
    })

    axios
      .get('http://localhost:8080/api/players', {
        headers: { idTH: result[0].idTH, idClub: idTeam1 },
      })
      .then((response) => {
        setPlayersTeam1(response.data)
      })

    axios
      .get('http://localhost:8080/api/players', {
        headers: { idTH: result1[0].idTH, idClub: idTeam2 },
      })
      .then((response) => {
        setPlayersTeam2(response.data)
      })

    const list = {
      playersTeam1: playersTeam1,
      playersTeam2: playersTeam2,
    }
    emitPlayersList(list)

    setIsPlayersListSended(true)
  }

  const getSelectedTeam1 = (e) => {
    console.log('t1', e.target.value)
    setIdTeam1(e.target.value)
  }

  const getSelectedTeam2 = (e) => {
    console.log(e.target.value)
    setIdTeam2(e.target.value)
  }

  return (
    <div className="xl:text-4xl flex flex-col items-center rounded-lg p-2 w-full">
      <div className="my-4 underline">Selectionnez les equipes</div>

      <div className="text-center w-full max-w-2xl">
        <div className="my-4 w-full">
          <select
            className="bg-primary-color rounded p-1 w-full cursor-pointer"
            onChange={getSelectedTeam1}
            id="teamsSelect"
          >
            {clubs?.map((club, i) => (
              <option key={i} value={club.id}>
                {club.name}
              </option>
            ))}
          </select>
        </div>

        <div className="my-2 font-bold">VS</div>

        <div className="my-4 w-full">
          <select
            className="bg-primary-color rounded p-1 w-full cursor-pointer"
            onChange={getSelectedTeam2}
            id="teamsSelect"
          >
            {clubs?.map((club, i) => (
              <option key={'0' + i} value={club.id}>
                {club.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className="mt-10 p-3 border border-primary-color rounded-lg hover:bg-primary-color transition-colors"
          onClick={teamButtonSubmit}
        >
          Démarrer le match
        </button>
      </div>
    </div>
  )
}

PlayersList.propTypes = {
  setIsPlayersListSended: PropType.function,
}

export default PlayersList
