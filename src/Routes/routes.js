import NavBar from "../components/Resuseables/Navbar/NavBar";
import AboutUs from "../components/Resuseables/AboutUs/AboutUs";
import Events from "../components/Resuseables/Events/Events";
import MyTicket from "../components/Resuseables/MyTickets/MyTicket";
import Categories from "../components/Resuseables/Categories/Categories";
import Search from "../components/Resuseables/Search/Search";
import ContactUs from "../components/Resuseables/ContactUs/ContactUs";
import Features from "../Features/Features";
import Layout from "../components/Layout/Layout";

export const ROUTES = [
    {
        path: '',
        element: <Layout/>,
        children:[
            {
                path: '',
                element: <Features/>
            },

            {
                path: '/about',
                element: <AboutUs/>
            },
            {
                path: '/event',
                element: <Events/>
            },
            {
                path: '/myTicket',
                element: <MyTicket/>
            },
            {
                path: '/categories',
                element: <Categories/>
            },
            {
                path: '/search',
                element: <Search/>
            },

            {
                path: '/contactUs',
                element: <ContactUs/>
            }
        ]
    },

]