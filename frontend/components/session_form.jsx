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
        const header = this.props.formType === "signup" ? (
            <div>
                <h1>Sign Up</h1>
                <Link to="/login">Already have an account?</Link>
            </div>
        ) : (
                <div>
                    <h1>Login</h1>
                    <Link to="/signup">Not a user?</Link>
                </div>
            );
        let errors = [];
        if (this.props.errors) {
            errors = this.props.errors;
        }

        return (
            <div>
                <form>

                    <header>{header}</header>

                    <ul className='errors'>
                        {errors.map((error) => {
                            return <li>{error}</li>;
                        })}
                    </ul>

                    <label>Username:
                <input type="text"
                            name="user[username]"
                            value={this.state.username}
                            onChange={this.handleInput('user[username]')} />
                    </label>

                    <label>Password:
                <input type="password"
                            name="user[password]"
                            value={this.state.password}
                            onChange={this.handleInput('user[password]')} />/>
              </label>

                    <button onClick={this.handleSubmit}>{this.props.formType}</button>

                </form>
            </div>
        )
    }
}

export default SessionForm;