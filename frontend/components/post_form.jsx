import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.state = {
            post: {
                photoFile: null,
                photoUrl: null,
                caption: ""
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        return null; ////////////////////
    }

    handleFile(e) {
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0]
        const field1 = "photoFile";
        const field2 = "photoUrl";
        debugger
        fileReader.onloadend = () => {
            this.setState({ post: { [field1]: file, [field2]: fileReader.result } } )
        }
        debugger
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleinput(field) {
        return (e) => (
            this.setState({ [field]: e.currentTarget.value })
        )
    }

    render() {
        debugger
        const preview = this.state.post.photoUrl ? <img src={this.state.post.photoUrl} height="300" width="300"/> : null;
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="file"
                    onChange={this.handleFile}/>
                    {preview}
                <label>
                    Caption 
                    <input type="text" value={this.state.caption} onChange={this.handleinput("post[caption]")}/>
                </label>

            </form>
        )
    }
}


export default PostForm;