import React from 'react';

class Comment extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            body: "",
            postId: this.props.postId,
            userId: this.props.currentUser.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput() {
        return e => (this.setState({  body: e.target.value }));
    }

    handleSubmit(e) {
        e.preventDefault()
        const comment = Object.assign({}, {comment: this.state})
        debugger
        this.props.addComment(comment)
    }

    render() {
        return  (
        <div>
            <form onSubmit={this.handleSubmit} >
                <input type="text" placeholder="Add a comment..." onChange={this.handleInput()}/>
                <input type="submit" value="Post"/>
            </form>
        </div>
        )}
}

export default Comment;