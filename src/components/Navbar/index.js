import React from 'react';
import {BottomNavigation, BottomNavigationAction, makeStyles, Typography} from "@material-ui/core";
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div color='secondary' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#e9ecef', marginBottom: '3rem' }}>
            <Typography variant='h2' align='center' >Redux Essentials Example</Typography>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root} style={{backgroundColor: '#e9ecef'}}>
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
        </div>
    );
}
