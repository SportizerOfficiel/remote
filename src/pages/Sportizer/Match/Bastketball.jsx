import React, { useState } from 'react'

import PlayersList from '../../../layouts/Basket/PlayersList'
import BasketMatch from '../../../layouts/Basket/BasketMatch'

import GoBack from '../../../components/GoBack'

const Bastketball = () => {
  const [isPlayersListSended, setIsPlayersListSended] = useState(false)

  return isPlayersListSended ? (
    <BasketMatch />
  ) : (
    <div className="w-screen h-screen bg-secondary-color p-2 text-white-color text-xl pt-20">
      <GoBack />
      <h1 className="text-center">Basketball</h1>
      <PlayersList
        isPlayersListSended={isPlayersListSended}
        setIsPlayersListSended={setIsPlayersListSended}
      />
    </div>
  )
}

export default Bastketball
