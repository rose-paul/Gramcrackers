import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import PostFormContainer from './post_form_container';
import EditProfileContainer from './edit_profile_container';
import EditPostFormContainer from './edit_post_form_container';

function Modal({ modal, closeModal }) {
    
    if (!modal) {
        return null;
    }
    
    let component;
    switch (modal.modal) {
        case 'createpost':
            component = <PostFormContainer />;
            break;
        case 'viewpost':
            return null;
        // case 'editprofile':
        //     component = <EditProfileContainer />;
        //     break;
        case 'editpost':
            component = <EditPostFormContainer id={modal.id}/>;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
