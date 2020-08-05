import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import routes from './router.config'

class Index extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
      
                <Router>
                    <Switch>
                        <Redirect path='/' exact={true} to='/index' />
                        {routes.map((route) => (
                            <Route key={route.path} path={route.path}
                                render={props => <route.component {...props} routes={route.routes} parentRoute={route} />}
                            />
                        ))}
                    </Switch>
                </Router>
  
            </ThemeProvider>
        )
    }
}
export default Index