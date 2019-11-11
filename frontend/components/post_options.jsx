import React from 'react';

class PostOptions extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        // let deleteButton = this.props.currentUser && this.props.currentUser.id
        //     === this.props.id ?
            
            // : null
        // let editButton = this.props.currentUser && this.props.currentUser.id
        //     === this.props.id ?  : null;
        //         debugger
        return (
            <div>
                <p>i'm here</p>
                <button onClick={() => this.props.deletePhoto(this.props.id)
                    .then(this.props.closeModal())
                    .then(this.props.history.push(`/${this.props.currentUser.username}`))}>Delete</button>
                <button onClick={() => this.props.editPostModal
                    ('editpost', this.props.id)}>Edit Post</button>
            </div>
        )
    }
}

export default PostOptions;