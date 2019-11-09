import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props)
       
        this.state = {
            // post: {
                photoFile: null,
                photoUrl: null,
                caption: ""
            // }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[caption]', this.state.caption);
        formData.append('post[photo]', this.state.photoFile);
        this.props.postPhoto(formData).then(() => this.props.history.push(`/${this.props.currentUser.username}`))
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
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} height="300" width="300"/> : null;
        return(
            <div className="post-form">
                <h1>Upload Photo</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="preview">
                        {preview}
                    </div>
                    <div className="upload-btn-wrapper">
                    <button className="btn">Choose File
                        </button>
                        <input type="file"
                        name="myfile"
                        onChange={this.handleFile}
                        />
                    </div>
                    <br/>
                    <label>
                        Caption 
                    </label>
                    <textarea value={this.state.caption} onChange={this.handleInput('caption')}
                        placeholder="It's lit 🔥🔥🔥 #YoungjunTime "
                    />
                <button>Click to submit</button>
                </form>
            </div>
        )
    }
}


export default PostForm;