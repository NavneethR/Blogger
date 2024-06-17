import "../assets/css/form.css";

const Signup = () => {
    return (<div className="form-container">
        <form className="inner-container">
            <h2 className="form-title">SignUp Form</h2>
            <hr/>
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" type="text" name="name" placeholder="e.g. John Doe"/>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="email" name="email" placeholder="e.g. johndoe@gmail.com"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" name="password" placeholder="e.g. JohnDoe007"/>
            </div>
            <div className="form-group">
                <label>Confirm password</label>
                <input className="form-control" type="password" name="confirm-password" placeholder="e.g. JohnDoe007"/>
            </div>
            <div className="form-group">
                <input className="button" type='submit' value="Signup"/>
            </div>
        </form>
    </div>);
};

export default Signup;