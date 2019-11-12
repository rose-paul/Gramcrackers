import React from 'react';

class EditUserForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => (this.setState({ [field]: e.target.value }));
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[display_name]', this.state.display_name)
        formData.append('user[id]', this.state.id)
        formData.append('user[bio]', this.state.bio)
        this.props.updateUser(formData)
            .then(() => this.props.history.push(`/${this.props.currentUser.username}`))
    }

    render() {
        return(
            <div className="user-form-div">
            <form className="edit-user-form" onSubmit={this.handleSubmit}>
                <h3>Profile</h3>
                <div>
                <label>Name
                    <input type="text" value={this.state.display_name} onChange={this.handleInput('display_name')}/>
                </label>
                <label>Bio
                    <input type="text" value={this.state.bio} onChange={this.handleInput('bio')}/>
                </label>
                </div>
                <input type="submit" value="Update Info"/>
            </form>
            </div>
        )
    }
}

export default EditUserForm;