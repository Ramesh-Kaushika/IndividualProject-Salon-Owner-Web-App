import React, {useRef, useState} from 'react';
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

const Verify = () => {

    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputs = useRef([]);

    const handleChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
        // Move to next input if the current input has a value
        if (text && index < 5) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === "Backspace" && index > 0 && !code[index]) {
            inputs.current[index - 1].focus();
        }
    };

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
                    <h2>Verification</h2>
                    <h3 style={{color: "white", marginBottom: 20, fontWeight: "bold"}}>Please Enter The <h3
                        style={{fontWeight: "bold", color: "#e55039"}}>6 Digit</h3> Code Sent
                    </h3>
                    <h5 style={{fontWeight: "400"}}>
                        Code Was Sent Your Mobile Phone
                    </h5>
                    <h5 style={{fontWeight: "400"}}>
                        0765341860
                    </h5>
                </Box>

                <div style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginVertical: 30,
                    marginHorizontal: 30,
                }}>
                    {code.map((digit, index) => (
                        <TextField
                            cursorColor={"#3995a6"}
                            key={index}
                            style={{
                                width: 40,
                                height: 50,
                                borderWidth: 1,
                                borderColor: "#ccc",
                                borderRadius: 8,
                                textAlign: "center",
                                fontSize: 18,
                                backgroundColor: "#fff",
                                shadowColor: "#000",
                                shadowOffset: {width: 0, height: 4},
                                shadowOpacity: 0.3,
                                shadowRadius: 4.65,
                                elevation: 8,
                                color: 'black',
                            }}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={digit}
                            onChangeText={text => handleChange(text, index)}
                            onKeyPress={e => handleKeyPress(e, index)}
                            ref={ref => inputs.current[index] = ref}
                        />
                    ))}
                </div>
                <h3 style={{fontSize: 15, color: "white", marginBottom: 20}}>This Code Expires in <h3
                    style={{fontWeight: "bold", color: "#e55039"}}>5 minutes</h3>
                </h3>
                <Link to={'/create-new-password'}>
                    <Button sx={{backgroundColor: '#009688', width: '35ch', textTransform: 'none',}}
                            variant="contained">Verify</Button>
                </Link>
                <Link  to={'/forgot-password'}>
                    <h6 style={{ color: "#e55039", textDecorationLine: "underline", fontWeight: "bold", fontSize: 16 }}>Resend Code</h6>
                </Link>
            </Box>
        </Box>
    );
};
export default Verify;

