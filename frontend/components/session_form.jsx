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
        this.handleDemo = this.handleDemo.bind(this);
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

    handleDemo(e) {
        e.preventDefault();
        const user = Object.assign({}, {
            user: {
                username: "testuser",
                password: "password"
            }
        })
        this.props.processForm(user).then(() => this.props.history.push('/'))
    }

    render() {
        const footer = (
                <div>
                    <p> Don't have an account? <Link to="/signup" onClick={this.props.noErrors}>Sign up</Link>
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
                <img src='/login2.jpg' width="30%" height="40%" />
                <div className="inner"> 

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

                    <button onClick={this.handleDemo}>Demo User</button>

                    <ul className='errors'>
                        {errors.map((error) => {
                            return <li>{error}</li>;
                        })}
                    </ul>
                </form>
                    <footer>{footer}</footer>
                </div>

            </div>
        )
    }
}

export default SessionForm;