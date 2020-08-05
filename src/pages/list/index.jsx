import React, { Component } from 'react'
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { observer, inject } from 'mobx-react'
import './style.scss'
@inject('testStore')
@observer
class Lists extends Component {
    handleGetList = () => {
        const {testStore} =this.props
        testStore.getList({name:'查看'})
    }
    render() {
        const { list } = this.props.testStore
        return (
            <div id="about">
                <Button variant="outlined" color="primary" onClick={this.handleGetList}>查看列表</Button>
                <div className='list-box'>
                    <List component="nav" aria-label="secondary mailbox folders">
                        {list && list.map((value) => (
                            <ListItem button key={value.title}>
                                <ListItemText primary={value.title} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        )
    }
}

export default Lists