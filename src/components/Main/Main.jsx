import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import routes from "../../common/Navigation/routes.jsx";
import GroupIcon from '@mui/icons-material/Group';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';
import NotificationAddSharpIcon from '@mui/icons-material/NotificationAddSharp';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';
import ThumbUpOffAltSharpIcon from '@mui/icons-material/ThumbUpOffAltSharp';
import {Button} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


export default function Main() {

    const logoutonclick = () => {
        localStorage.removeItem('stToken')
        window.location.reload();
    }

    const getRoutes = (value) => value.map(
        (val) =>
            <Route key={val.key} path={val.path} element={val.component}/>
    )

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{backgroundColor: '#009688'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography fontWeight={500} variant="h6" noWrap component="div">
                        ZenStyle Salon Dashboard
                    </Typography>
                    <Button  onClick={()=> logoutonclick()} variant="contained" sx={{display:'flex', right:10,position:'absolute', backgroundColor: '#1e272e',color: 'balck', width:'13%',}} endIcon={<LogoutIcon />}>
                        LOG OUT
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer sx={{
                '& .MuiDrawer-paper': {
                    backgroundColor: '#212121',
                },
            }}
                    variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} sx={{
                        color: '#ffffff',
                    }}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider
                    sx={{
                        backgroundColor: '#ffffff', // Changes the line color
                    }}
                />
                <List>
                    {routes.map((val, index) => (
                        <Link style={{textDecoration: 'none', color: '#2d3436'}} key={val.key} to={val.path}>
                            <ListItem key={val.key} disablePadding sx={{display: 'block'}}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                        color: '#ffffff',
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            color: '#ffffff',
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {index === 0 && <GroupIcon/>}
                                        {index === 1 && <BadgeIcon/>}
                                        {index === 2 && <LocalLibrarySharpIcon/>}
                                        {index === 3 && <NotificationAddSharpIcon/>}
                                        {index === 4 && <AttachMoneySharpIcon/>}
                                        {index === 5 && <AddIcCallSharpIcon/>}
                                        {index === 6 && <ThumbUpOffAltSharpIcon/>}
                                    </ListItemIcon>
                                    <ListItemText primary={val.key} sx={{opacity: open ? 1 : 0}}/>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>

            </Drawer>
            <Box component="main" sx={{width: '100%', p: 3}}>
                <DrawerHeader/>
                <Box>
                    <Routes>
                        {getRoutes(routes)}
                        {/*<Route path={'/main/*'} element={<Navigate to={'/main/add-promotion'}/>}/>*/}
                        {/*<Route path={'/main/*'} element={<Main/>}/>*/}
                        <Route path={'*'} element={<Navigate to={'/client-base'}/>}/>
                    </Routes>
                </Box>
            </Box>
        </Box>
    );
}
