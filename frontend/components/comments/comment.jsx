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
        this.props.addComment(comment).then( () => {
            this.props.updateComments ? this.props.updateComments() : null
        }).then(() => {
            this.setState({ body: "" })
            let field = document.getElementById(`comment-input-${this.props.postId}`);
            field.value = ""
        })
    }

    render() {
        let klass = this.props.feedItem ? "add-comment-feed" : "add-comment"
        return  (
        <div>
            <form className={klass} onSubmit={this.handleSubmit} >
                <input id={`comment-input-${this.props.postId}`} type="text" placeholder="Add a comment..." onChange={this.handleInput()}/>
                <input type="submit" value="Post"/>
            </form>
        </div>
        )}
}

export default Comment;

