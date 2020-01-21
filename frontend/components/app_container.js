import { connect } from "react-redux";
import App from './App';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(mapStateToProps, null)(App);