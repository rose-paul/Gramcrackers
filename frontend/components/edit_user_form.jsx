import React from 'react';

class EditUserForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        console.log(this.state)
        return e => (this.setState({ [field]: e.target.value }));
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.state.id)
        formData.append('user[bio]', this.state.bio)
        this.props.updateUser(formData)
    }

    render() {
        return(

            <form onSubmit={this.handleSubmit}>
                <h1>Edit User and Profile Info</h1>
                <label>Bio
                    <input type="text" value={this.state.bio} onChange={this.handleInput('bio')}/>
                </label>
                <input type="submit"/>
            </form>
        )
    }
}

export default EditUserForm;