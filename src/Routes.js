import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./containers/Home"
import Notes from "./containers/Notes"
import Login from "./containers/Login"
import Signup from "./containers/Signup"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Settings from "./containers/Settings"
import NewNote from "./containers/NewNote"
import NotFound from "./containers/NotFound"
import AppliedRoute from "./components/AppliedRoute"
import AuthenticatedRoute from "./components/AuthenticatedRoute"
import UnauthenticatedRoute from "./components/UnauthenticatedRoute"

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={Signup}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/mr-muzsik"
      exact
      component={AboutMe}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/projects"
      exact
      component={Projects}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings"
      exact
      component={Settings}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/new"
      exact
      component={NewNote}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={Notes}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
)
