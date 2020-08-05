import React from 'react'
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
const About = (props) => {
    return (
        <div id="about">
            <Button variant="outlined" color="primary" onClick={handleGetList}>
                查看列表
            </Button>
            <div className='list-box'>
                <List component="nav" aria-label="secondary mailbox folders">
                    {props.list&&props.list.map((value) => (
                        <ListItem button key={value.title}>
                            <ListItemText primary={value.title} />
                        </ListItem>
                    ))}
                </List>
            </div>

        </div>
    )
}

export default About