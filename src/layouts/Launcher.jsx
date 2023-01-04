import React from 'react'
import { NavLink } from 'react-router-dom'

const Launcher = () => {
  return (
    <div className="flex justify-center place-content-center">
      <div className="space-y-6">
        <NavLink
          to="/app/match/basketball"
          className="bg-primary-color flex justify-between text-jutify text-white group px-6 py-2 max-w-full mx-auto w-75  cursor-pointer rounded-lg  overflow-hidden space-y-1 "
        >
          <span className="font-hindGuntur text-lg">
            Nouveau Match de Bastketball
          </span>
        </NavLink>
        <NavLink
          to="/app/match/football"
          className="bg-primary-color flex justify-between text-jutify text-white group px-6 py-2 max-w-full mx-auto w-75  cursor-pointer rounded-lg  overflow-hidden space-y-1 "
        >
          <span className="font-hindGuntur text-lg">
            Nouveau Match de Football
          </span>
        </NavLink>
        <NavLink
          to="/app/match/handball"
          className="bg-primary-color flex justify-between text-jutify text-white group px-6 py-2 max-w-full mx-auto w-75  cursor-pointer rounded-lg  overflow-hidden space-y-1 "
        >
          <span className="font-hindGuntur text-lg">
            Nouveau Match de Handball
          </span>
        </NavLink>
        <NavLink
          to="/app/match/handball"
          className="bg-primary-color flex justify-between text-jutify text-white group px-6 py-2 max-w-full mx-auto w-75  cursor-pointer rounded-lg  overflow-hidden space-y-1 "
        >
          <span className="font-hindGuntur text-lg">
            Nouveau Match de Volleyball
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default Launcher
