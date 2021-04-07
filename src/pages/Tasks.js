import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
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


export default function Tasks() {
    const classes = useStyles();
    const labelId = `checkbox-list-label-1`;
    const [taskEntryText, setTaskEntryText] = useState('');
    const createTaskEntry = (title) => {
        return (<TaskListItem labelId={labelId} primaryText={title} />);
    };

    const [taskEntries, setTaskEntries] = useState([
        createTaskEntry("You've got work to do")
    ]);

    const addTaskEntry = () => {
        setTaskEntries([...taskEntries, createTaskEntry(taskEntryText)])
    }

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
                        onClick={() => addTaskEntry()}
                >
                    Add
                </Button>
            </form>

            <List className={classes.root}>
                { taskEntries }
            </List>
        </div>
        );
    }