import AddPromotion from "../../pages/AddPromotion/AddPromotion.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import ViewEmployee from "../../pages/ViewEmployee/ViewEmployee.jsx";
import ClientBase from "../../pages/ClientBase/ClientBase.jsx";
import FeedBack from "../../pages/FeedBack/FeedBack.jsx";
import Appointment from "../../pages/Appointment/Appointment.jsx";
import Notification from "../../pages/Notification/Notification.jsx";
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";


const routes = [
    {
        name:"Dashboard",
        key:"Dashboard",
        path:"/dashboard",
        component:<Dashboard/>
    },
    {
        name:"Client Base",
        key:"Client Base",
        path:"/client-base",
        component:<ClientBase/>
    },
    {
        name:"ViewEmployee",
        key:"Employees",
        path:"/view-employee",
        component:<ViewEmployee/>
    },
    {
        name:"Appointment",
        key:"Appointments",
        path:"/appointments",
        component:<Appointment/>
    },
    {
        name:"Notification",
        key:"Notifications",
        path:"/notifications",
        component:<Notification/>
    },
    {
        name:"Promotions",
        key:"Promotions",
        path:"/add-promotion",
        component:<AddPromotion/>
    },
    {
        name:"Contact",
        key:"Contact",
        path:"/contact",
        component:<Contact/>
    },
    {
        name:"Feedback",
        key:"Feedbacks",
        path:"/feedbacks",
        component:<FeedBack/>
    },
    // {},
]

export default routes;
