import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillCaretLeft } from 'react-icons/ai'

const GoBack = () => (
  <NavLink
    to="/app"
    className="block font-semibold text-lg group-hover:text-gray-900"
  >
    <AiFillCaretLeft />
  </NavLink>
)

export default GoBack
