import React from 'react'
// import { NavLink } from 'react-router-dom'
import { BsGear } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { RiMoneyEuroCircleLine } from 'react-icons/ri'
import { MdOutlineHeadsetMic, MdQueryStats } from 'react-icons/md'

import { useAuth } from '../contexts/auth'
import { logoutMe } from '../utils/appAuth'
import { NavLink } from 'react-router-dom'

// import Status from './Status'

const HeaderAuth = () => {
  const {
    setSportizerConnect,
    sportizerConnect,
    setPairingConnect,
    setMairieName,
  } = useAuth()

  const logout = (e) => {
    e.preventDefault()

    logoutMe(setSportizerConnect, setPairingConnect, setMairieName)
  }
  return (
    <header className="flex fixed top-0 text-primary-color font-hindGuntur p-5 w-full">
      {sportizerConnect && (
        <div className="flex justify-between w-full">
          <NavLink to="/app/stats" className="flex items-normal">
            <MdQueryStats className="mr-4" />
            <div>Statistique</div>
          </NavLink>

          <NavLink
            to="/app/publicity"
            className="flex justify-center items-center"
          >
            <RiMoneyEuroCircleLine className="mr-4" />
            <div>Publicité</div>
          </NavLink>

          <NavLink
            to="/app/account"
            className="flex justify-center items-center"
          >
            <BsGear className="mr-4" />
            <div>Mon Compte</div>
          </NavLink>

          <NavLink to="/app/help" className="flex justify-center items-center">
            <MdOutlineHeadsetMic className="mr-4" />
            <div>Aide</div>
          </NavLink>
          <button onClick={logout} className="flex justify-center items-center">
            <BiLogOut className="mr-4" />
            <div>Deconnexion</div>
          </button>
        </div>
      )}
      {/* <div>
        <Status />
      </div> */}
    </header>
  )
}

export default HeaderAuth
