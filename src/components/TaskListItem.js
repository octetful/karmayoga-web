import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

export default function TaskListItem(labelId) {
    const [checked, setChecked] = useState(false);

    return (
        <ListItem key={1} 
                    role={undefined}
                    dense
                    button
                    onClick={() => setChecked(!checked)}
                    >
            <ListItemIcon>
                <Checkbox edge="start"
                checked={checked}
                disableRipple
                inputProps= {{'aria-labelledby': labelId}}/>   
            </ListItemIcon>
            <ListItemText id={labelId} primary={`You got work to do!`} />
        </ListItem>
    );
};