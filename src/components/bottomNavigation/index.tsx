import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    marginTop: 'auto',
  }
});

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SimpleBottomNavigation = (props: Props) => {
  const classes = useStyles();
  const {value, onChange} = props;

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation