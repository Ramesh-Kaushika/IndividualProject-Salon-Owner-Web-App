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
                backgroundColor: '#009688', // Transparent white background
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between', // Ensure even spacing between image and content
                    width: '70%', // Set width of the box to make content centered and not too wide
                    border: '1px solid',
                    borderColor: 'grey.400',
                    borderRadius: 2, // Optional: slightly round the corners
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow effect
                    margin: 'auto', // Center the box in the view

                }}
            >
                <img style={{ width: '50%', height: 'auto', borderRadius: 2 }} src="src/assets/7070628_3275434.jpg" alt="Forogot Password image" />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingX: 5, // Space out the text from the image
                    }}
                >
                    <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>ZenStyle Salon Administrator</h1>
                    <Box sx={{  marginBottom: '1.5rem' }}>
                        <h1 style={{ fontSize: '1.5rem',marginBottom: 0 }}>Forgot Password</h1>
                        <h4 style={{ fontSize: '1.2rem', marginTop: 0 }}>Don't Worry!</h4>
                        <h5 style={{ fontWeight: '400', fontSize: '1rem', marginBottom: '1.5rem' }}>
                            Enter Your Registered Mobile Number {"\n"} and we will send you a verification code.
                        </h5>
                    </Box>

                    <TextField
                        sx={{ width: '65%' }} // Full width of the content box
                        id="standard-basic"
                        label="Enter Mobile Number"
                        variant="standard"
                    />
                    <Link to={'/Verify'} style={{ width: '65%', marginTop: '1.5rem' }}>
                        <Button
                            sx={{
                                backgroundColor: '#009688',
                                width: '100%', // Full width of the content box
                                textTransform: 'none',
                            }}
                            variant="contained"
                        >
                            Continue
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};
export default ForgotPassword;
