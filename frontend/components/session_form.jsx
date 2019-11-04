import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: {
            username: "",
            password: ""
        }
           
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(type) {
        return (e) => (
            this.setState({ [type]: e.target.value })
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push('/'));
    }

    render() {
        const footer = (
                <div>
                    <p> Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
                </div>
        )
        let errors = [];
        if (this.props.errors) {
            errors = this.props.errors;
        }
        let klass = this.state.user.username && this.state.user.password ? ("active") : ("");
        return (
            <div className="login-form-div">
                <form>

                    <div>
                        <h1>Gramcrackers</h1>
                    </div>
                            <input 
                            type="text"
                            name="user[username]"
                            value={this.state.username}
                            onChange={this.handleInput('user[username]')} 
                            placeholder="Username"
                            />

                            <br/>

                            <input 
                            type="password"
                            name="user[password]"
                            value={this.state.password}
                            onChange={this.handleInput('user[password]')} 
                            placeholder="Password"
                            />

                            <br/>
                    
                    <button onClick={this.handleSubmit} className={klass}>Log In</button>

                    <ul className='errors'>
                        {
                            errors.map((error) => {
                                return <p>{error}</p>;
                            })}
                    </ul>
                </form>

                    <header>{footer}</header>
            </div>
        )
    }
}

export default SessionForm;