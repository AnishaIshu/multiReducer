import React from 'react';
import { connect } from 'react-redux';

const User = ({ user, setUser, clearUser }) => {
  return (
    <div>
      <h2>User: {user}</h2>
      <button onClick={() => setUser('John')}>Set User</button>
      <button onClick={clearUser}>Clear User</button>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch ({ type: 'SET_USER', payload: user }),
        clearUser: () => dispatch({ type: 'CLEAR_USER' }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User)
