import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.scss'
class Loading extends Component {

    render() {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }
}

export default Loading