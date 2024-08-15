import React from 'react';
import {
    Box,
    Button,
    Divider,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Fullscreen height
                backgroundImage: 'url("src/assets/pngwing.com.png")', // Background image
                backgroundSize: 'cover', // Cover the entire area
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent repetition
                backgroundColor:'#009688'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    border: '1px solid',
                    borderColor: 'grey.400',
                    paddingY: 15, // Padding inside the box
                    paddingX: 6, // Padding inside the box
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow effect

                }}
            >
                <h1>ZenStyle Registration</h1>
                <TextField
                    sx={{width: '35ch'}}
                    id="standard-basic"
                    label="Name"
                    variant="standard"/>
                <TextField
                    sx={{width: '35ch'}}
                    id="standard-basic"
                    label="E-mail"
                    variant="standard"/>
                <TextField
                    sx={{width: '35ch'}}
                    id="standard-basic"
                    label="E-mail"
                    variant="standard"/>
                <TextField
                    sx={{width: '35ch'}}
                    id="standard-basic"
                    label="E-mail"
                    variant="standard"/>

                <FormControl sx={{width: '35ch'}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <Divider sx={{ width: '100%', marginY: 2 }} />
                <Link to={'/login'}>
                    <Button sx={{backgroundColor: '#212121', width: '35ch', textTransform: 'none', }} variant="contained">Sign Up</Button>
                </Link>



            </Box>
        </Box>
    );
};

export default Register;
