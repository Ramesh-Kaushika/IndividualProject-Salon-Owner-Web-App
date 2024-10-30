import {Button} from "@mui/material";
import React from "react";
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";

const GradiantButton = ({title}) => {

    return (

            <Button
                sx={{

                    fontWeight:'bold',
                    fontSize:16,
                    border:10,
                    borderColor:'#009688',
                    borderRadius:10,
                    margin:1,
                    width: {xs: '65%', sm: '45%', md: '35%', lg: '25%'}, // Responsive widths
                    height: {xs: '170px', sm: '180px', md: '190px', lg: '200px'},
                    background: 'linear-gradient(45deg, #001a17 30%, #009688 90%)',
                    color: 'white',
                    '&:hover': {
                        background: 'linear-gradient(45deg, #009688 30%, #001a17 90%)',
                    },
                }}
            >
                {title}
            </Button>

    );
}
export default GradiantButton;
