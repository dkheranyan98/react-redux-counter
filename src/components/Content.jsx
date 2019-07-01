import React from 'react';
import {Alert} from 'reactstrap';


const Content = (props) => {
    return (
      <div>
        <Alert color="primary">
            <button onClick={() => props.onIncrement(1)}>increment</button>
        </Alert>
        <Alert color="primary">
          <button onClick={(data) => data=props.onFetchData()}>data</button>
        </Alert>
        <Alert color="primary">
            <button onClick={() => props.onDecrement(-1)}>decrement</button>
        </Alert>
      </div>
    );
  };

  export default Content;