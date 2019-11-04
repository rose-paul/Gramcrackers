import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
    render() {
        return (
            <div>
                <p>Not a user? Sign up</p><Link to="/signup">here</Link>
                <p>Already a user? Login</p><Link to="/login">here</Link>
            </div>
        )
    }
}
export default Splash;