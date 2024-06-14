import {NavLink} from 'react-router-dom'

const PublicNavBar = () => {
    return(
        <nav>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
        </nav>
    );
};

export default PublicNavBar;