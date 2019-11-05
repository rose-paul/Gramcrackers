import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logoutUser().then(() => this.props.history.push('/login'))
    }

    render() {
        return (
            <button onClick={e => this.handleClick(e)}>Logout</button>
        )
    }
}

export default Profile;