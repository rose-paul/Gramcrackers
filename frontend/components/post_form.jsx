import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props)
       
        this.state = this.props.post
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.props.formType === "Update Post") {
            formData.append('post[id]', this.state.id)
        }
        formData.append('post[caption]', this.state.caption);
        if (this.props.formType === "New Post") {
            formData.append('post[photo]', this.state.photoFile);
        }
        this.props.action(formData).then(
            () => this.props.closeModal()
        )
    }

    handleFile(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result } )
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleInput(field) {
        return (e) => (
            this.setState( { [field]: e.currentTarget.value } )
        )
    }

    render() {
        const photoUpload = this.props.formType === "New Post" ? (
            <div className="upload-outer">
                <div className="upload-btn-wrapper">
                    <button className="btn">Choose File
                        </button>
                    <input type="file"
                        name="myfile"
                        onChange={this.handleFile}
                    />
                </div>
            </div>
        ) : null

        

        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} height="300" width="300"/> : null;
        return(
            <div className="post-form">
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="preview">
                        {preview}
                    </div>
                   {photoUpload}
                    <label>
                        Caption 
                    </label>
                    <textarea value={this.state.caption} onChange={this.handleInput('caption')}
                        placeholder="Add a caption... "
                    />
                <button className="post-submit">Click to submit</button>
                </form>
            </div>
        )
    }
}


export default PostForm;