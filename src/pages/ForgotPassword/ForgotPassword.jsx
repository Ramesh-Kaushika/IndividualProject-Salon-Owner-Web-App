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
import {Image, Visibility, VisibilityOff} from "@mui/icons-material";
import {Link} from "react-router-dom";

const ForgotPassword = () => {
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
                <h1>ZenStyle Salon Administrator</h1>
                <Box>
                    <h1>Forgot Password</h1>
                    <h4 style={{fontSize: 25}}>Don't Worry !</h4>
                    <h4 style={{fontSize: 15, fontWeight: "400"}}>
                        Enter Your Registered Mobile Number {"\n"}and we will send you a
                        verification code.
                    </h4>
                </Box>

                <TextField
                    sx={{width: '35ch'}}
                    id="standard-basic"
                    label="Enter Mobile Number"
                    variant="standard"/>
                <Link to={'/Verify'}>
                    <Button sx={{backgroundColor: '#009688', width: '35ch', textTransform: 'none',}}
                            variant="contained">Continue</Button>
                </Link>


            </Box>
        </Box>
    );
};
export default ForgotPassword;
