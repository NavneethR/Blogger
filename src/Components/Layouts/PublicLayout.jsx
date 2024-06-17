import {Navigate,Outlet} from "react-router-dom"; 
import PublicNavBar from "../PublicNavBar";

const PublicLayout = () => {
    const auth = false;

    if(auth){
        return <Navigate to="/"/>
    }

    return (
        <div>
            <div className="primary-link">
                <PublicNavBar/>
            </div>
            <Outlet/>
        </div>
    )
};

export default PublicLayout;