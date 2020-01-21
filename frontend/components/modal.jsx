import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import PostFormContainer from './posts/post_form_container';
import EditPostFormContainer from './posts/edit_post_form_container';
import PostOptionsContainer from './posts/post_options_container';
import EditCommentContainer from './comments/edit_comment_container';

function Modal({ modal, closeModal }) {

    if (!modal) {
        return null;
    }
    let component;
    switch (modal.modal) {
        case 'createpost':
            component = <PostFormContainer />;
            break;
        case 'commentoptions':
            component = <EditCommentContainer comment={modal.id} updateComments={modal.func}/>
            break;
        case 'editpost':
            component = <EditPostFormContainer id={modal.id}/>;
            break;
        case 'postoptions':
            component = <PostOptionsContainer id={modal.id} />
            break;
        default:
            return null;
    }
    let display; 
        if (modal.modal === "postoptions" ) {
            display = (<div className="modal-background-options" onClick={closeModal}>
                            <div className="modal-child-options" onClick={e => e.stopPropagation()}>
                                {component}
                            </div>
                        </div>) 
        } else if (modal.modal === "commentoptions") {
            display = (<div className="modal-background-comments" onClick={closeModal}>
                <div className="modal-child-comments" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>) 
        } else {
            display =
                 (<div className="modal-background" onClick={closeModal}>
                     <div className="modal-child" onClick={e => e.stopPropagation()}>
                         {component}
                     </div>
                 </div>)
        }
   
    return (
        display
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
