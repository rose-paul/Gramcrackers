import { connect } from "react-redux";
import SearchBar from "./search_bar";
import {searchUsers} from "../actions/user_actions"

const mapStateToProps = state => ({
    users: state.entities.search
});

const mapDispatchtoProps = dispatch => ({
    searchUsers: username => dispatch(searchUsers(username))
});

export default connect(mapStateToProps, mapDispatchtoProps)(SearchBar);