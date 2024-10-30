import React from 'react';
import {Button} from "@mui/material";
import GradiantButton from "../../components/Button/GradiantButton.jsx";
const Dashboard = () => {

    return (
        <div style={{display:'flex', justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
       <GradiantButton title={'Client Base'}/>
       <GradiantButton title={'Employees'}/>
       <GradiantButton title={'Appointments'}/>
       <GradiantButton title={'Notifications'}/>
       <GradiantButton title={'Promotions'}/>
       <GradiantButton title={'Contacts'}/>
       <GradiantButton title={'Feedbacks'}/>
        </div>
    );
}

export default Dashboard;
