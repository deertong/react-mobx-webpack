import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Index = () => {
    const history = useHistory()

    const handleAbout = () => {
        history.push('about')
    }

    return (
        <div id='index'>
            <div className='rudder'>
                <div className='iconfont iconchuanduo-02 index-icon Rotation'></div>
            </div>
            <div className="text">
                hello world
            </div>
        </div>
    )
}


export default Index
