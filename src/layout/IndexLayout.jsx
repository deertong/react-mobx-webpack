import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core'
class IndexLayout extends Component {
  handleOpen = (path) => {
    const { history } = this.props
    history.push(path)
  }
  render() {
    const { routes } = this.props
    return (
      <>
        <div className="nav">
          <Button className="button" onClick={() => this.handleOpen('/')}>首页</Button>
          <Button className="button" onClick={() => this.handleOpen('/list')}>列表</Button>
          <Button className="button" onClick={() => this.handleOpen('/about')}>关于</Button>
        </div>
        <Switch>
          {routes.map(route => {
            return (
              <Route
                key={route.path}
                path={route.path}
                render={props => <route.component {...props} routes={route.routes || []} />}
              />
            );
          })}
        </Switch>
      </>
    )
  }
}


export default IndexLayout;