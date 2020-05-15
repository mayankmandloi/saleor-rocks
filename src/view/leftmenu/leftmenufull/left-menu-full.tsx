import React from 'react';
import { BottomNavigation, BottomNavigationAction, makeStyles, Box, List, ListItem, ListItemText } from '@material-ui/core';
import Mail from '@material-ui/icons/Mail';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';
import {style} from './left-menu-full-style';

export function LeftMenuFull () {

    const useStyles = makeStyles(style);
    const menuItem = [
        "About",
        "Products",
        "Specials",
        "Stores",
        "Contact"
    ];

    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
      };
    return (
        <div className={classes.parent}>
        <List component="nav" aria-label="main mailbox folders" className={classes.menuItem}>
            {menuItem.map(item => <ListItem button><ListItemText primary={item} /></ListItem>)}
      </List>

<BottomNavigation value={value} onChange={handleChange} className={classes.bottomIcon}>
<BottomNavigationAction label="Instagram" value="instagram" icon={<Instagram />} />
<BottomNavigationAction label="Github" value="github" icon={<GitHub />} />
<BottomNavigationAction label="Facebook" value="facebook" icon={<Facebook />} />
<BottomNavigationAction label="Twitter" value="twitter" icon={<Twitter />} />
<BottomNavigationAction label="Mail" value="mail" icon={<Mail />} />
</BottomNavigation>
</div>
    )
}