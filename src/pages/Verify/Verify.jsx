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
                backgroundColor: '#d1503f', // Transparent white background
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
                <img style={{width: '50%', height: 'auto', borderRadius: 2}} src="src/assets/13416089_5243321.jpg"
                     alt="verify image"/>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingX: 5, // Space out the text from the image
                    }}
                >
                    <h1>ZenStyle Salon Administrator</h1>
                    <Box>
                        <h1 style={{fontSize: '1.5rem', marginBottom: 0}}>Verification</h1>
                        <h3 style={{color: "#212121", marginTop: 0, fontWeight: "bold", fontSize: '1rem'}}>Please Enter
                            The <span
                                style={{color: "#d1503f", fontSize: '1rem'}}> 6 Digit</span> Code Sent
                        </h3>
                        <h5 style={{fontWeight: "400", marginBottom: 0,}}>
                            Code Was Sent Your Mobile Phone <br/>0765341860
                        </h5>
                    </Box>
                    <div style={styles.container}>
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyPress(e, index)}
                                ref={(ref) => (inputs.current[index] = ref)}
                                style={styles.input}
                            />
                        ))}
                    </div>
                    <Box sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <h3 style={{fontSize: 15, color: "#212121", marginBottom: 20}}>This Code Expires in <span
                            style={{fontWeight: "bold", color: "#d1503f"}}> 5 minutes</span>
                        </h3>
                        <Link to={'/create-new-password'}>
                            <Button sx={{backgroundColor: '#009688', width: '35ch', textTransform: 'none',}}
                                    variant="contained">Verify</Button>
                        </Link>
                        <Link to={'/forgot-password'}>
                            <h6 style={{
                                color: "#d1503f",
                                textDecorationLine: "underline",
                                fontWeight: "bold",
                                fontSize: 16
                            }}>Resend Code</h6>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '30px',
    },
    input: {
        width: '40px',
        height: '50px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        textAlign: 'center',
        fontSize: '18px',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        color: 'black',
        outline: 'none', // Removes the default browser outline when focused
        marginRight: '8px', // Small spacing between inputs
    },
};


export default Verify;

