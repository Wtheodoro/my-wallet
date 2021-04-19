import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignIn from '../pages/SignIn'

// Stateless component
const AuthRoutes: React.FC = () => (
    <Switch>
        <Route path="/" component={SignIn} />
    </Switch>
)

export default AuthRoutes