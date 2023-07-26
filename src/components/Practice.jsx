import React from 'react'
import { connect } from 'react-redux';

const Practice = ({ count, increment, decrement}) => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-semibold mt-5'>Redux Practice</h1>
      <h2 className='mt-10 text-2xl '>Counter: {count}</h2>


<div className='flex justify-center mt-4 gap-10'>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
</div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};



export default connect (mapStateToProps, mapDispatchToProps)(Practice)
