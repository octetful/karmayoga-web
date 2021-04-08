import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
    Card: {
        height: '200px',
    },
});

export default function SchedulerCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.Card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Priority: {props.priority || "low"}!
                </Typography>
                <Typography variant="h5">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                    {props.description}
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