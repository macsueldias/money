import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard'
import List from '../pages/List'
import AddRegister from '../pages/AddRegister'
// import SignIn from '../pages/SignIn'

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/list/:type" exact component={List} />
      <Route path="/addregister" exact component={AddRegister} />
    </Switch>
  </Layout>
)

export default AppRoutes
