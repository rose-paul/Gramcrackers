import React from 'react';
import EditUserForm from './edit_user_form';

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.currentUser.id,
            photoFile: null,
            photoUrl: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchOwner(this.props.currentUser.id)
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.state.userId)
        formData.append('user[photo]', this.state.photoFile)
        this.props.updateUser(formData).then(this.props.history.push(`/${this.props.currentUser.username}`))
    }

    handleFile(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result })
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        const profilePic = this.props.currentUser.photoUrl ? 
            <img className="profile-pic-edit" src={this.props.currentUser.photoUrl} /> : 
            <img className="profile-pic" src="/user.png" />

        const displayPic = this.state.photoUrl ? <img className="profile-pic" src={this.state.photoUrl}/> : profilePic

        const submit = this.state.photoFile ? <button className="post-submit">Submit Change</button> : null;

        if (!this.props.owner) return null;
        
        return (
            <div className="edit-profile-div">
                <form className='edit-profile-form' onSubmit={this.handleSubmit}>
                <div className="edit-profile-header">
                {displayPic}
                    <div className="upload-outer-profile">
                        {this.props.currentUser.username}
                                <div className="upload-btn-wrapper-profile">
                                    <label className="btn-profile">Change Profile Pic
                                        <input type="file"
                                         name="myfile"
                                         onChange={this.handleFile}
                                            />
                                    </label>
                                </div>
                            {submit}
                    </div>  
                </div>              
                    
                </form>

                <EditUserForm 
                currentUser={this.props.currentUser} 
                updateUser={this.props.updateUser}
                history={this.props.history}
                owner={this.props.owner}
                />
            </div>
        )
    }
}

export default EditProfileForm;