import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

const BaseLayout = ({ component: Component, ...rest }) => {
    const history = useHistory()
    const handleOpenPage = (url) => {
        history.push(url)
    }
    
    return (
        <>
            <div>
                <Button onClick={() => handleOpenPage('index')}>首页</Button>
                <Button onClick={() => handleOpenPage('list')}>列表</Button>
                <Button onClick={() => handleOpenPage('about')}>关于</Button>
            </div>
            <Route {...rest} render={matchProps => (<Component {...matchProps} />)} />
        </>
    )
};

export default BaseLayout