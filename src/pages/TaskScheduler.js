import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import SchedulerCard from '../components/SchedulerCard';

const useStyles = makeStyles({
    Carousel: {
        width: '450px',
    },
});

export default function TaskScheduler() {
    const classes = useStyles();

    return (
        <div className="App-header">
            <Carousel autoPlay={false}
                    animation="slide"
                    swipe={true}
                    className={classes.Carousel}
                    indicators={true}
                    fullHeightHover={true}
                    cycleNavigation={true}
                    >
                <SchedulerCard priority="high" 
                        title="Get some sleep" 
                        description="sleep's good for brain cells"
                        estimate="8"
                />
                <SchedulerCard title="Get a nap" 
                        description="always refreshing, those naps"
                />
                <SchedulerCard priority="medium" 
                        title="Write some code" 
                        description="nothing gets the mind coding better"
                />
            </Carousel>
        </div>
    );
}