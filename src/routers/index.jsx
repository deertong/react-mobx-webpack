import React, { Component, Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles';
import Loading from '../components/loading/Loading'
import theme from '../theme';
import routes from './router.config'

class Index extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Suspense fallback={<Loading/>}>
                        <Switch>
                            <Redirect path='/' exact={true} to='/index' />
                            {routes.map((route) => (
                                <Route key={route.path} path={route.path} component={route.component} />
                            ))}
                        </Switch>
                    </Suspense>
                </Router>

            </ThemeProvider>
        )
    }
}
export default Index