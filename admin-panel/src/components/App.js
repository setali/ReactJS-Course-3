import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Sidebar from "./generic/Sidebar";
import Dashboard from "./generic/Dashboard";
import Person from "./person/Router";
import Post from "./post/Router";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginRight: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function PermanentDrawerRight() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.content} style={{padding: '100px'}}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route exact path={"/"} component={Dashboard}/>
                    <Route exact path={"/person*"} component={Person}/>
                    <Route exact path={"/post*"} component={Post}/>
                </Switch>
            </main>
            <Sidebar/>
        </div>
    );
}
