import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    CompletedText: {
        textDecoration: 'line-through',
        fontStyle: 'italic',
    },
    IncompleteText: {
        fontStyle: 'normal'
    },
}));

export default function TaskListItem(props) {
    const [checked, setChecked] = useState(false);
    const classes = useStyles();

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
                inputProps= {{'aria-labelledby': props.labelId}}/>   
            </ListItemIcon>
            <ListItemText id={props.labelId} 
                    primary={props.primaryText}
                    className={(checked)?classes.CompletedText:classes.IncompleteText} 
            />
        </ListItem>
    );
};