import React from 'react';
import GradiantButton from "../../components/Button/GradiantButton.jsx";
import GroupIcon from "@mui/icons-material/Group";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalLibrarySharpIcon from "@mui/icons-material/LocalLibrarySharp";
import NotificationAddSharpIcon from "@mui/icons-material/NotificationAddSharp";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import AddIcCallSharpIcon from "@mui/icons-material/AddIcCallSharp";
import ThumbUpOffAltSharpIcon from "@mui/icons-material/ThumbUpOffAltSharp";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
        const navigate = useNavigate();

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            <GradiantButton title={'Client Base'}
                            startIcon={<GroupIcon style={{fontSize: '80px',  }}/>}
                            onClick={() => navigate('/client-base')}
            />
            <GradiantButton title={'Employees'}
                            startIcon={<BadgeIcon style={{fontSize: '80px',  }}/>}
                            onClick={() => navigate('/view-employee')}
            />
            <GradiantButton title={'Appointments'}
                            startIcon={<LocalLibrarySharpIcon style={{fontSize: '80px',  }}/>}
                            onClick={() => navigate('/appointments')}
            />
            <GradiantButton title={'Notifications'}
                            startIcon={<NotificationAddSharpIcon style={{fontSize: '80px',  }}/>}
                            onClick={() => navigate('/notifications')}
            />
            <GradiantButton title={'Promotions'}
                            startIcon={<AttachMoneySharpIcon style={{fontSize: '80px',  }}/>}
                            onClick={() => navigate('/add-promotion')}
            />
            <GradiantButton title={'Contacts'}
                            startIcon={<AddIcCallSharpIcon style={{fontSize: '80px',  }}/>}
                            onClick={() => navigate('/contact')}
            />
            <GradiantButton title={'Feedbacks'}
                            startIcon={<ThumbUpOffAltSharpIcon style={{fontSize: '80px',  }}/>}
                            onClick={() => navigate('/feedbacks')}
            />
        </div>
    );
}

export default Dashboard;
