import {NavLink} from 'react-router-dom'
import "../assets/css/main.css"

const PrivateNavBar = () => {
    return(
        <nav className='primary-link'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/categories'>Categories</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/setting'>Setting</NavLink>
            <NavLink to='/login'>Logout</NavLink>
        </nav>
    );
}

export default PrivateNavBar;