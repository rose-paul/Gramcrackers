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
* Follows/feed 
* Search

You can see more about CRUD, feed and search below. 

## CRUD Operations
Logged in users can create a new post from the top right of the navbar. On submission the modal will close and their image will be displayed on their profile page. Users can edit captions of posts, but to keep post/comment content relevant to each other, photos on posts cannot be changed or edited -- only deleted.

### Post Form
The same `PostForm` component is rendered for creating and editing posts dependent on the `formType` passed down from containers. The `PostForm` `handleSubmit` and `render` behave accordingly. 

```js
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

```

![alt-text](https://github.com/rose-paul/aAFullstack/blob/master/public/post-gramcrackers.gif?raw=true)
## Main Feed
The `Feed` component renders posts via the `FeedIndexItem`. When posts are fetched (`props.fetchFeedPosts`), JBuilder also returns the posts' comments nested in the post. The `FeedIndexItem` is given a post object, from state, as props.
``` javascript 
const Feed = props => {

    const [posts, setPosts] = useState(props.posts)
    const [currentUser] = useState(props.currentUser)
    const [loaded, setLoaded] = useState(false)
    

    useEffect( () => {
        props.fetchFollows('following')
        .then( res => props.fetchFeedPosts(Object.keys(res.follows)))
        .then( res => setPosts(res.posts))
        .then( () => setLoaded(true))
    }, [])
```
The `FeedIndexItem` uses the props passed down as initial state for comments. Only after adding a comment does the component fetch that post's comments and set state to render the updated comments to display the current user's comment. 

``` javascript
const FeedIndexItem = props => {

    const [comments, setComments] = useState(props.post.comments)

    const updateComments = () => {
        props.fetchComments(props.post.id).then(res => {
            setComments(res.comments)
        })
    }
  ```
  
  In the return, this `updateComments` function is passed to the `Comment` and `CommentIndexItem` so it can be called upon adding a new comment or deleting a comment. 
  
  ## Search
  
  Users can view search results for other users on each keystroke. A filter function queries the DB on change to the input field and sets the state based on the result. Additionally, when the component mounts, I add an event listener to detect outside clicks for clearing the input field (and subsequently the search results). 
  
  For this, I used the `useRef()` and wrapped the return in `<div ref={node}`. On a click, I can check if that div contains the click target, and set state accordingly. 
  
  ``` javascript
  
  const searchBar = ({users, searchUsers}) => {

    const [searchRes, setRes] = useState(users)
    const node = useRef();

     useEffect(() => {
       document.addEventListener("click", handleOutsideClick);
       return () => {
         document.removeEventListener("click", handleOutsideClick);
       };
     }, []);

     const handleOutsideClick = e => {
         if (node.current.contains(e.target)) {
            return;
         } else {
             setRes({})
             const el = document.querySelector('.search');
             el.value = ""
         }
     }

    const filter = (e) => {
        let searchValue = e.currentTarget.value
        if (searchValue === "") {
            setRes({})
        } else {
            searchUsers(searchValue)
                .then(res => {
                    setRes(res.users)
                })
        }
    }
    ```
  
  
