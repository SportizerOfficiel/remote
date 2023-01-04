import React from 'react'
import PropType from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { useAuth } from './contexts/auth'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { sportizerConnect } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) =>
        sportizerConnect ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropType.any,
}
