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
import {Link, Navigate, Route, Routes, useLocation} from "react-router-dom";
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
import logo from '../../assets/ZENSTYLE.png';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';


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

    const location = useLocation();  // Get the current route path

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
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between', // space-between aligns items to start and end
                            width: '100%', // Full width for the Box to allow space for both elements
                        }}
                    >
                        {/* Centered, circular logo */}
                        <Box
                            sx={{
                                margin:'0 auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '90%',
                                width: '90px', // set width and height to make the Box a square
                                borderRadius: '50%', // makes the shape circular
                                overflow: 'hidden', // hides any overflow to keep it circular
                            }}
                        >
                            <img src={logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
                        </Box>

                        {/* IconButton aligned at the end */}
                        <IconButton onClick={handleDrawerClose} sx={{ color: '#ffffff' }}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </Box>
                </DrawerHeader>

                <List>
                    {routes.map((val, index) => (
                        <Link style={{textDecoration: 'none', color: '#2d3436'}} key={val.key} to={val.path}>
                            <ListItem key={val.key} disablePadding sx={{display: 'block'}}>
                                <ListItemButton
                                    sx={{
                                        backgroundColor: location.pathname === val.path ? '#009688' : 'transparent',  // Highlight active tab
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                        color: '#ffffff',
                                        '&:hover':{
                                            backgroundColor: '#484848',
                                        }
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
                                        {index === 0 && <DashboardSharpIcon/>}
                                        {index === 1 && <GroupIcon/>}
                                        {index === 2 && <BadgeIcon/>}
                                        {index === 3 && <LocalLibrarySharpIcon/>}
                                        {index === 4 && <NotificationAddSharpIcon/>}
                                        {index === 5 && <AttachMoneySharpIcon/>}
                                        {index === 6 && <AddIcCallSharpIcon/>}
                                        {index === 7 && <ThumbUpOffAltSharpIcon/>}
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
                        <Route path={'*'} element={<Navigate to={'/dashboard'}/>}/>
                    </Routes>
                </Box>
            </Box>
        </Box>
    );
}
