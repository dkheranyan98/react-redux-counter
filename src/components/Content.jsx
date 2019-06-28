import React from 'react';
import {Alert} from 'reactstrap';

const Content = (props) => {
    console.log(props)
    return (
      <div>
        <Alert color="primary">
            <button onClick={() => props.onIncrement(1)}>increment</button>
        </Alert>
        <Alert>
          <button onClick={() => {props.data.map((data) =>  data)}}> data </button>
        </Alert>
        <Alert color="primary">
            <button onClick={() => props.onDecrement(-1)}>decrement</button>
        </Alert>
      </div>
    );
  };

  export default Content;