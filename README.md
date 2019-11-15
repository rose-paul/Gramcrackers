# Gramcrackers

Gramcrackers, an Instagram clone, is a social media app that allows users to post photos and interact with other users through following, comments and likes. 

[Live Demo](https://gramcrackers.herokuapp.com/#/login)

## Technologies
* Backend: Rails/ActiveRecord/PostgreSQL
* Frontend: React/Redux
* [AWS S3](https://aws.amazon.com/)

## Features
* Secure user authentication using BCrypt library
* CRUD operations for posts, profiles, comments and likes

## Post CRUD Operations
Logged in users can create a new post from the top right of the navbar. On submission the modal will close and their image will be displayed on their profile page. Users can edit captions of posts, but to keep post/comment content relevant to each other, photos on posts cannot be changed or edited -- only deleted.

### Post Form
The same `PostForm` component is rendered for creating and editing posts dependent on the `formType` passed down from containers. The render function displays a photo upload button accordingly. 

`    handleSubmit(e) {
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
 `

## Main Feed
