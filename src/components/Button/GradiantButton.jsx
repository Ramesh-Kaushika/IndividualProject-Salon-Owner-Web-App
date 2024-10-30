import {Button} from "@mui/material";
import React from "react";
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";

const GradiantButton = ({title,startIcon,onClick}) => {

    return (

            <Button
                onClick={onClick}
                startIcon={startIcon}
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 1.3)', // Add shadow here
                    fontWeight:'bold',
                    fontSize:16,
                    border:10,
                    borderColor:' #009688',
                    borderRadius:10,
                    margin:1,
                    width: {xs: '65%', sm: '45%', md: '35%', lg: '25%'}, // Responsive widths
                    height: {xs: '170px', sm: '180px', md: '190px', lg: '200px'},
                    background: 'linear-gradient(45deg, #001a17 30%, #009688 90%)',
                    color: 'white',
                    '&:hover': {
                        background: 'linear-gradient(45deg, #009688 30%, #001a17 90%)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Add shadow here
                    },
                }}
            >
                {title}
            </Button>

    );
}
export default GradiantButton;
