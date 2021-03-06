import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    alignSelf: 'stretch'
  },
});

export default function BottomNavbar(props) {
  let classes = useStyles();
  const [value, setValue] = React.useState(props.value);
  let history = useHistory();

  const handleChange = (event, newValue) => {
    history.push(`/${newValue}`);
    setValue(newValue);
  };

  useEffect(() => {
    history.push(`/${value}`);
  });

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} value="home" />
      <BottomNavigationAction label="Calendar" icon={<CalendarTodayIcon />} value="calendar" />
      <BottomNavigationAction label="Tasks" icon={<AssignmentTurnedInIcon />} value="tasks" />
      <BottomNavigationAction label="Scheduler" icon={<ScheduleIcon />} value="scheduler" />
    </BottomNavigation>
  );
};
