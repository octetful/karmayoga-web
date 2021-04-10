import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles({
    Card: {
        height: '200px',
    },
});

export default function SchedulerCard(props) {
    const classes = useStyles();
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [priority, setPriority] = useState(props.priority || "low")

    return (
        <Card className={classes.Card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom> 
                    <TextField
                        select
                        label="Priority"
                        value={priority}
                        onChange={(evt) => setPriority(evt.target.value)}
                        inputProps={{ 'aria-label': 'naked' }}
                        >
                        <option key="high" value="high">
                            High!
                        </option>
                        <option key="medium" value="medium">
                            Medium
                        </option>
                        <option key="low" value="low">
                            Low
                        </option>
                    </TextField>
                </Typography>
                <Typography variant="h3">
                    <InputBase
                        value={title}
                        onChange={(evt) => setTitle(evt.target.value)}
                        inputProps={{ 'aria-label': 'naked' }} />
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                    <InputBase
                        value={description}
                        onChange={(evt) => setDescription(evt.target.value)}
                        inputProps={{ 'aria-label': 'naked' }} />
                </Typography>
                <Typography color="textSecondary" variant="caption" display="block" gutterBottom>
                    Estimate = {props.estimate || "1"} hours
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="primary">Schedule</Button>
            </CardActions>
        </Card>
    );
}