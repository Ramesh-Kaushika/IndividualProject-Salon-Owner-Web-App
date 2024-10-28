import AddPromotion from "../../pages/AddPromotion/AddPromotion.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import ViewEmployee from "../../pages/ViewEmployee/ViewEmployee.jsx";
import ClientBase from "../../pages/ClientBase/ClientBase.jsx";
import FeedBack from "../../pages/FeedBack/FeedBack.jsx";
import Appointment from "../../pages/Appointment/Appointment.jsx";


const routes = [
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
        name:"ViewEmployee",
        key:"Employees",
        path:"/view-employee",
        component:<ViewEmployee/>
    },
    {
        name:"Client Base",
        key:"Client Base",
        path:"/client-base",
        component:<ClientBase/>
    },
    {
        name:"Feedback",
        key:"Feedback",
        path:"/feedback",
        component:<FeedBack/>
    },
    {
        name:"Appointment",
        key:"Appointment",
        path:"/appointment",
        component:<Appointment/>
    },
    // {},
]

export default routes;
