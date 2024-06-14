import {Navigate,Outlet} from "react-router-dom"; 
import PrivateNavBar from "../PrivateNavBar";

const PrivateLayout = () => {
    const auth = true;

    if(!auth){
        return <Navigate to="/login"/>
    }

    return (
        <div>
            <PrivateNavBar/>
            <Outlet/>
        </div>
    )
};

export default PrivateLayout;