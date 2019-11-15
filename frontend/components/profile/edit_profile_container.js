import { connect } from "react-redux";
import { updateUser, fetchOwner } from "../../actions/user_actions";
import EditProfileForm from "./edit_profile_form";



const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    owner: state.entities.owner
})


const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    fetchOwner: userId => dispatch(fetchOwner(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
