import {Link} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VerifiedUserSharp from '@material-ui/icons/VerifiedUserSharp';
import {makeStyles} from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));

function Sidebar() {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="right"
        >
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                <ListItem button key={'home'}>
                    <Link to={'/'}>
                        <ListItemText primary={'Dashboard'}/>
                    </Link>
                </ListItem>
                <ListItem button key={'users'}>
                    <Link to={'/person'}>
                        <ListItemText primary={'Users'}/>
                    </Link>
                </ListItem>
                <ListItem button key={'posts'}>
                    <Link to={'/post'}>
                        <ListItemText primary={'Posts'}/>
                    </Link>
                </ListItem>

            </List>
        </Drawer>
    )
}

export default Sidebar