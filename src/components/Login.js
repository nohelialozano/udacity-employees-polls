import { useState } from "react";
import { connect } from "react-redux";
import { SetAuthedUser } from "../actions/authedUser";

const Login = (props) => {

    const { dispatch, users } = props;

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChangeUser = (e) => {
        const text = e.target.value;
        if (!text){
            setErrorMessage("");
        }
        setUser(text);
    }

    const handleChangePassword = (e) => {
        const text = e.target.value;
        if (!text){
            setErrorMessage("");
        }
        setPassword(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (users[user] && users[user].password == password){
                dispatch(SetAuthedUser(user));          
                setErrorMessage("");
            }else{
                setErrorMessage("The user and password you entered did not match our records. Please check and try again.");
                //console.log("Error ", errorMessage);
        }
    }

    return( 
        <div>
            <h3 className="center">Log In</h3>
            <form className="add-question center" onSubmit={handleSubmit}>
                {errorMessage != "" && <div data-testid="error-message" className="login-error">{errorMessage}</div>}
                <p>User</p>
                <input data-testid="user-input" placeholder="User" value={user} onChange={handleChangeUser} className="input"/>
                <p>Password</p>
                <input data-testid="password-input" type="password" placeholder="Password" value={password} onChange={handleChangePassword} className="input"/>
                <button data-testid="submit-button" className="btn block" type="submit" disabled={user === "" || password === ""}>
                    Submit
                </button>
            </form>
        </div>
    );
}
  
const mapStateToProps = ({ users }) => {
    return {
      users
    };
  };
  
  export default connect(mapStateToProps)(Login);