import React  from 'react';
import Home from "./Home";
import About from "./About";
import styled from 'styled-components'
import { Link, Switch, Route } from "react-router-dom";

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
`

export default function App() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Container>
  )
}