import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap'
import Header from './components/Header';
import Content from './components/Content';
import { incrementCounter, decrementCounter, fetchData, setFetchedData } from "./store/counter/actions";
import './App.css';




function App(props) {
  console.log(props);
  return (
    <Container fluid>
      <Header counter={props.counter} />
      <Content onDecrement={props.onDecrement} onIncrement={props.onIncrement}  data={props.data}/>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
    data: state.counter.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: (numb) => dispatch(incrementCounter(numb)),
    onDecrement: (numb) => dispatch(decrementCounter(numb)),
    onFetchData: () => dispatch(fetchData()),
    onSetFetchedData:(data) => dispatch(setFetchedData(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);