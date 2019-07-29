import React from 'react';
import { Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { incrementCounter, decrementCounter, fetchData, fetchDataUsers } from "../store/counter/actions";
import { connect } from 'react-redux';
import { Table } from 'reactstrap';


const Content = (props) => {
  return (
    <div>
      <Alert color="primary">
        <button onClick={() => props.onIncrement(1)}>increment</button>
      </Alert>
      <Alert color="primary">
        <button onClick={() => props.onFetchData()}>post</button>
      </Alert>
      <Alert color="primary">
        <button onClick={() => props.onFetchDataUsers()}>users</button>
      </Alert>
      <Alert color="primary">
        <button onClick={() => props.onDecrement(-1)}>decrement</button>
      </Alert>
      <Table>
        <thead>
          {
            props.data.map(item => {
              return (
                <tr key={item.id}>
                  <button onClick={() => props.history.push(`posts/${item.id}`)}> <th>{item.id}</th> </button>
                  <th>{item.title}</th>
                  <th>{item.body}</th>
                </tr>
              )
            })
          }
        </thead>
      </Table>
      <Table>
        <thead>
          {
            props.users.map(item => {
              return (
                <tr key={item.id}>
                 <button onClick={() => props.history.push(`users/${item.id}`)}> <th>{item.id}</th> </button>
                  <th>{item.name}</th>
                  <th>{item.username}</th>
                  <th>{item.email}</th>
                </tr>
              )
            })
          }
        </thead>
      </Table>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: (numb) => dispatch(incrementCounter(numb)),
    onDecrement: (numb) => dispatch(decrementCounter(numb)),
    onFetchData: () => dispatch(fetchData()),
    onFetchDataUsers: () => dispatch(fetchDataUsers()),
  }
}

const mapStateToProps = state => {
  return {
    data: state.counter.data,
    users: state.counter.users,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Content));