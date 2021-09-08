import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Login from './Login';
// import Signup from './Signup';
import About from './About';
import Contact from './Contact';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
export default function CenteredTabs() {
  const classes = useStyles();
  const routes = ['/', '/search', '/login', '/signup', '/about', '/contact'];
  return (
    <>
      <Paper className={classes.root}>
        <BrowserRouter>
          <Route path="/" render={(history) => (
          <Tabs indicatorColor="primary" textColor="secondary" centered value={history.location.pathname}>
            <Tab
              label="Home"
              value={routes[0]}
              component={Link}
              to={routes[0]}
            />
            <Tab
              label="Player Search"
              value={routes[1]}
              component={Link}
              to={routes[1]}
            />
            <Tab
              label="Log In"
              value={routes[2]}
              component={Link}
              to={routes[2]}
            />
            <Tab
              label="Sign Up"
              value={routes[3]}
              component={Link}
              to={routes[3]}
            />
            <Tab
              label="About 247FBK"
              value={routes[4]}
              component={Link}
              to={routes[4]}
            />
            <Tab
              label="Contact Us"
              value={routes[5]}
              component={Link}
              to={routes[5]}
            />
          </Tabs>
        )}
        />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/login" component={Login} />
        {/* <Route path="/signup" component={Signup} /> */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </Paper>
    </>
  );
}
