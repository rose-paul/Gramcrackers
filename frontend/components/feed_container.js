import { connect } from "react-redux";
import Feed from "./feed";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(mapStateToProps, null)(Feed);