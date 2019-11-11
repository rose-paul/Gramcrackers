import { connect } from "react-redux";
import { updateUser } from "../actions/user_actions";
import EditProfileForm from "./edit_profile_form";
import { openModal, closeModal } from "../actions/modal_actions";


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})


const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
    // changeProfilePicModal: (
    //     <div onClick={() => dispatch(openModal('profilepic'))}>
    //         <p>Change Profile Photo</p>
    //     </div>
    // ),
    // closeModal: () => dispatch(closeModal())