import React from 'react';
import {BottomNavigation, BottomNavigationAction, makeStyles, Typography} from "@material-ui/core";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import {Link} from "react-router-dom";

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
            <Link to="/"><BottomNavigationAction label="Posts" value="posts" icon={<HomeOutlinedIcon color="primary" />} /></Link>

        </BottomNavigation>
        </div>
    );
}
