import AddPromotion from "../../pages/AddPromotion/AddPromotion.jsx";
import AddSchedule from "../../pages/AddSchedule/AddSchedule.jsx";
import Contact from "../../pages/Contact/Contact.jsx";


const routes = [
    {
        name:"AddPromotion",
        key:"AddPromotion",
        path:"/add-promotion",
        component:<AddPromotion/>
    },
    {
        name:"AddSchedule",
        key:"AddSchedule",
        path:"/add-schedule",
        component:<AddSchedule/>
    },
    {
        name:"Contact",
        key:"Contact",
        path:"/contact",
        component:<Contact/>
    },
    // {},
    // {},
]

export default routes;
