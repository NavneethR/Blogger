import {Navigate,Outlet} from "react-router-dom"; 
import PrivateNavBar from "../PrivateNavBar";
i
const PublicLayout = () => {
    const auth = true;

    if(auth){
        return <Navigate to="/"/>
    }

    return (
        <div>
            <PrivateNavBar/>
            <Outlet/>
        </div>
    )
};

export default PublicLayout;