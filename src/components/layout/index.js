import React, { Fragment, useEffect } from 'react'
import './style.less'

function Layout(props) {
    useEffect(() => {
        // 打开首次调用
        console.log('layout')
    }, [])
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}
export default Layout
