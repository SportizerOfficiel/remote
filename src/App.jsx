import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { AuthContext } from './contexts/auth'

import { iAmAuth } from './utils/appAuth'

import { PrivateRoute } from './PrivateRoute'

import SportizerConnexion from './pages/Connexion/SportizerConnexion'
import Sportizer from './pages/Sportizer/Sportizer'
import HeaderAuth from './components/HeaderAuth'

import Publicity from './pages/Sportizer/Publicity'
import Statistic from './pages/Sportizer/Statistic'
import Account from './pages/Sportizer/Account'
import Help from './pages/Sportizer/Help'

import Bastketball from './pages/Sportizer/Match/Bastketball'
import Football from './pages/Sportizer/Match/Football'
import Handball from './pages/Sportizer/Match/Handball'
import Volleyball from './pages/Sportizer/Match/Volleyball'

const App = () => {
  const [sportizerConnect, setSportizerConnect] = useState(false)
  const [pairingConnect, setPairingConnect] = useState(false)
  const [screenStatus, setScreenStatus] = useState(false)
  const [wsStatus, setWsStatus] = useState(false)
  const [mairieName, setMairieName] = useState('')

  useEffect(() => {
    iAmAuth(setSportizerConnect, setMairieName)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        sportizerConnect,
        setSportizerConnect,
        pairingConnect,
        setPairingConnect,
        setScreenStatus,
        setWsStatus,
        screenStatus,
        wsStatus,
        mairieName,
        setMairieName,
      }}
    >
      <Router>
        <HeaderAuth />
        <PrivateRoute exact path="/app" component={Sportizer} />
        <PrivateRoute
          exact
          path="/app/match/basketball"
          component={Bastketball}
        />
        <PrivateRoute exact path="/app/match/football" component={Football} />
        <PrivateRoute exact path="/app/match/handball" component={Handball} />
        <PrivateRoute
          exact
          path="/app/match/volleyball"
          component={Volleyball}
        />
        <PrivateRoute exact path="/app/publicity" component={Publicity} />
        <PrivateRoute exact path="/app/account" component={Account} />
        <PrivateRoute exact path="/app/stats" component={Statistic} />
        <PrivateRoute exact path="/app/help" component={Help} />
        <Route exact path="/login" component={SportizerConnexion} />
        <Route path="*">
          {sportizerConnect ? <Redirect to="/app" /> : <Redirect to="/login" />}
        </Route>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
