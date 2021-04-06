import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TaskListItem from '../components/TaskListItem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        padding: '10px',
        backgroundColor: theme.palette.background.default,
    },
    NewTaskEntry: {
        width: '75%',
    }
}));

const createNewTaskEntry = (labelId) => {
    return <ListItem key={1} 
                role={undefined}
                dense
                button
                >
        <ListItemIcon>
            <Checkbox edge="start"
            checked={false}
            disableRipple
            inputProps= {{'aria-labelledby': labelId}}/>   
        </ListItemIcon>
        <ListItemText id={labelId} primary={`You got work to do!`} />
    </ListItem>
};

export default function Tasks() {
    const classes = useStyles();
    const labelId = `checkbox-list-label-1`;
    const [taskEntryText, setTaskEntryText] = useState('');

    return (
        <div className="App-header">
            And some tasks
            <form className={classes.root}>
                <TextField label="Enter a new task" 
                        className={classes.NewTaskEntry}
                        value={taskEntryText}
                        onChange={(evt) => setTaskEntryText(evt.target.value) }
                />
                <Button color="primary" 
                        variant="contained"
                        className={classes.button}
                        startIcon={<AddIcon />}
                >
                    Add
                </Button>
            </form>

            <List className={classes.root}>
                <TaskListItem labelId={labelId} />
            </List>
        </div>
        );
    }